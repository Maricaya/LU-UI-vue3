<template>
  <li
    class="lu-sub-menu"
    :class="{
      active: openKeys.indexOf(value) > -1,
      selected,
      [mode]: true,
      disabled: disabled === true
    }"
    v-click-outside="onOutside"
  >
    <div class="lu-sub-menu-title" @click="onClick">
      <slot name="title"/>
      <lu-icon
          v-if="showArrow"
          name="chevron-down"
          class="lu-sub-menu-icon"
          :size="12"
      ></lu-icon>
    </div>
    <ul class="lu-sub-menu-list" v-if="openKeys.indexOf(value) > -1">
      <slot/>
    </ul>
  </li>
</template>

<script lang="ts">
import {computed, inject, provide} from 'vue'
import {LUMenuOpenKey, LUMenuMode, SelectedKeyContext, LUMenuSelectedKey, LUMenuParentKey} from './Menu.vue'
import {Icon} from "dwc-icons";
import { ClickOutside } from "../directives/ClickOutside.ts";

export default {
  components: {
    "lu-icon": Icon
  },
  directives: { "click-outside": ClickOutside },
  props: {
    disabled: {
      type: Boolean
    },
    value: {
      type: [Number, String],
      required: true
    },
    showArrow: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const mode = inject(LUMenuMode);

    const {selectedKey, setSelectedKey} = inject<SelectedKeyContext>(LUMenuSelectedKey)
    const {parentKey, relationship, setRelationship} = inject(LUMenuParentKey)

    setRelationship(props.value, parentKey);

    const calAncestors = () => {
      const ancestors: Array<string | number> = [];

      let current = selectedKey.value;

      while (current && relationship.value.has(current)) {
        const ancestor = relationship.value.get(current);

        if (ancestor !== "dwc-menu-root") {
          ancestors.push(ancestor);
          current = ancestor;
        } else {
          current = "";
        }
      }

      return ancestors;
    };

    const selected = computed(() => {
      if (mode.value !== "horizontal") {
        return false;
      }
      if (!selectedKey.value) {
        return false;
      }
      const ancestors = calAncestors();

      return ancestors.indexOf(props.value) > -1;
    })

    const {openKeys, enableOpenKey} = inject(LUMenuOpenKey)
    const onClick = () => {
      if (props.disabled) {
        return;
      }
      enableOpenKey(props.value, openKeys.value.indexOf(props.value) === -1)
    }

    const onOutside = () => {
      if (mode.value === "horizontal" && openKeys.value.indexOf(props.value) > -1) {
        enableOpenKey(props.value, false);
      }
    }

    return {
      mode,
      selected,
      openKeys,
      onClick,
      onOutside
    }
  }
}
</script>

<style lang="scss">
@import "../assets/var.scss";

.lu-menu {
  > .lu-sub-menu {
    &.horizontal {
      &.active {
        > .lu-sub-menu-title {
          position: relative;

          &::after {
            position: absolute;
            bottom: -1px;
            right: 0;
            left: 0;
            display: block;
            content: "";
            height: 2px;
            background-color: $lu-blue;
          }
        }

        > .lu-sub-menu-list {
          background: #fff;
          margin-top: 3px;
        }
      }

      &.selected {
        > .lu-sub-menu-title {
          position: relative;
          background-color: #fff;

          &::after {
            position: absolute;
            z-index: 1001;
            bottom: -1px;
            right: 0;
            left: 0;
            display: block;
            content: "";
            height: 2px;
            background-color: $lu-blue;
          }
        }
      }
    }

    &.disabled {
      > .lu-sub-menu-title {
        color: $lu-disabled;
        cursor: not-allowed;
      }
    }
  }
}

.lu-sub-menu {
  width: 100%;

  &.active {
    > .lu-sub-menu-title {
      color: $lu-blue;

      > .lu-sub-menu-icon {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%) rotateZ(-180deg);
      }
    }
  }

  &.horizontal {
    position: relative;

    > .lu-sub-menu-list {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1000;
      width: 100%;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.23921568627451);
    }
  }

  &.disabled {
    > .lu-sub-menu-title {
      color: $lu-disabled;
      cursor: not-allowed;
    }
  }

  > .lu-sub-menu-title {
    padding: 12px 24px;
    color: $lu-main;
    cursor: pointer;
    transition: color $lu-transition;
    position: relative;

    &:hover {
      color: $lu-blue-highlight;
    }

    > .lu-sub-menu-icon {
      position: absolute;
      top: 50%;
      right: 8px;
      transition: transform $lu-transition;
      transform: translateY(-50%) rotateZ(0);
    }
  }

  > .lu-sub-menu-list {
    list-style: none;
    margin-bottom: 0;

    .lu-menu-item {
      padding: 12px 24px 12px 48px;
    }
  }
}
</style>

<template>
  <li
    class="lu-sub-menu"
    :class="{
      active: openKeys.indexOf(value) > -1,
      selected,
      disabled: disabled === true
    }"
  >
    <div class="lu-sub-menu-title" @click="onClick">
      <slot name="title"/>
    </div>
    <ul class="lu-sub-menu-list">
      <slot/>
    </ul>
  </li>
</template>

<script lang="ts">
import { computed, inject } from 'vue'
import {LUMenuOpenKey} from "./Menu.vue";

export default {
  props: {
    disabled: {
      type: Boolean
    },
    value: {
      type: [Number, String],
      required: true
    }
  },
  setup(props, context) {
    const selected = computed(() => {
      return false
    })
    const {openKeys, enableOpenKey} = inject(LUMenuOpenKey)
    const onClick = () => {
      if (props.disabled) {
        return;
      }
      enableOpenKey(props.value, openKeys.value.indexOf(props.value) === -1)
    }
    return {
      selected,
      openKeys,
      onClick
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
        color: $lu-disable;
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
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.23921568627451);
    }
  }

  &.disabled {
    > .lu-sub-menu-title {
      color: $lu-disable;
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

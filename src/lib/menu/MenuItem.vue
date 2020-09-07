<template>
	<li
		class="lu-menu-item"
		:class="{
      active: selectedKey === value,
      [mode]: true,
      disabled: disabled === true
		}"
    @click="onClick"
	>
		<slot />
	</li>
</template>

<script lang="ts">
import {LUMenuSelectedKey, LUMenuParentKey, SelectedKeyContext, LUMenuMode} from './Menu.vue'
import { inject } from 'vue'

export default {
  props: {
    value: {
      type: [Number, String],
      required: true
    },
    disabled: {
      type: Boolean
    }
  },
  setup (props, context) {
    const mode = inject(LUMenuMode);

    const {selectedKey, setSelectedKey} = inject<SelectedKeyContext>(LUMenuSelectedKey)

    const {parentKey, setRelationship} = inject(LUMenuParentKey);

    setRelationship(props.value, parentKey);

    const onClick = () => {
      if (props.disabled === true) {
        return
      }
      if (selectedKey.value !== props.value) {
        setSelectedKey(props.value)
      }
    }

    return {
      mode,
      onClick,
      selectedKey
    }
  }
}
</script>

<style lang="scss">
@import "../assets/var.scss";

.lu-menu {
  &.horizontal {
    > .lu-menu-item {
      &.active {
        background-color: #fff;

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
    }
  }
}

.lu-menu-item {
  color: $lu-main;
  cursor: pointer;
  transition: color $lu-transition, background-color $lu-transition;
  padding: 12px 24px;
  background-color: #fff;
  position: relative;
  white-space: nowrap;

  &:hover {
    color: $lu-blue-highlight;
  }

  &.active {
    color: $lu-blue;
    background-color: $lu-background-selected;
  }

  &.vertical {
    &.active {
      &::after {
        transform: scale(1);
      }
    }

    &::after {
      position: absolute;
      top: 0;
      bottom: 0;
      right: -1px;
      display: block;
      content: "";
      width: 2px;
      background-color: $lu-blue;
      transition: transform $lu-transition;
      transform: scale(0);
    }
  }

  &.disabled {
    color: $lu-disabled;
    cursor: not-allowed;
  }
}
</style>

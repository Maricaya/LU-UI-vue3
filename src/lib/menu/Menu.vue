<template>
  <ul class="lu-menu" :class="{[mode]: true}">
    <slot/>
  </ul>
</template>

<script lang="ts">
import {provide, Ref, ref, readonly} from 'vue'

export const LUMenuMode = "LUMenuMode"
export const LUMenuSelectedKey = "LUMenuSelectedKey"
export const LUMenuOpenKey = "LUMenuOpenKey"
export const LUMenuParentKey = "LUMenuParentKey"

type SelectedKey = string | number

export type SelectedKeyContext = {
  selectedKey: Ref<SelectedKey>;
  setSelectedKey: (key: SelectedKey) => void;
}

export default {
  name: 'lu-menu',
  props: {
    mode: {
      type: String,
      default: "vertical",
      validator(value: string): boolean {
        return ["vertical", "horizontal"].indexOf(value) > -1;
      }
    },
    defaultSelectedKey: [String, Number],
    defaultOpenKeys: [String, Number]
  },
  setup(props, context) {
    provide(LUMenuMode, readonly(ref(props.mode)));

    const selectedKey = ref<SelectedKey>(props.defaultSelectedKey);
    const setSelectedKey = (key: SelectedKey) => {
      selectedKey.value = key;
      context.emit("select", selectedKey.value)
    }
    provide(LUMenuSelectedKey, {
      selectedKey,
      setSelectedKey
    });

    const openKeys = ref<Array<SelectedKey>>(props.defaultOpenKeys || []);
    console.log('openKeys', openKeys, props.defaultOpenKeys || [])
    // const openKeys = computed()
    const enableOpenKey = (key: SelectedKey, enabled: boolean) => {
      if (enabled) {
        if (openKeys.value.indexOf(key) === -1) {
          openKeys.value.push(key)
        }
      }
      else {
        openKeys.value = openKeys.value.filter((i) => i !== key);
      }

      context.emit("open-change", [...openKeys.value])
    }
    provide(LUMenuOpenKey, {
      openKeys,
      enableOpenKey
    });

    const parentKey = ref("lu-menu-root");
    const relationship = ref(new Map<string | number, string | number>());
    const setRelationship = (key, parentKey) => {
      relationship.value.set(key, parentKey)
    }
    provide(LUMenuParentKey, {
      parentKey,
      relationship,
      setRelationship
    })
  }
}
</script>

<style lang="scss">
@import "../assets/styles/commons/var.scss";
.lu-menu {
  list-style: none;
  margin-bottom: 0;
  font-size: 14px;
  border-right: 1px solid $lu-border;
  &.horizontal {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-right: none;
    border-bottom: 1px solid $lu-border;
  }
}
</style>

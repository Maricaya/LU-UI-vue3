<template>
  <ul class="lu-menu">
    <slot/>
  </ul>
</template>

<script lang="ts">
import {provide, Ref, ref} from 'vue'

export const LUMenuSelectedKey = "LUMenuSelectedKey"
export const LUMenuOpenKey = "LUMenuOpenKey"

type SelectedKey = string | number

export type SelectedKeyContext = {
  selectedKey: Ref<SelectedKey>;
  setSelectedKey: (key: SelectedKey) => void;
}

export default {
  props: {
    defaultSelectedKey: [String, Number],
    defaultOpenKeys: [String, Number]
  },
  setup(props, context) {
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
    const enableOpenKey = (key: SelectedKey, enabled: boolean) => {
      if (enabled) {
        if (openKeys.value.indexOf(key) !== -1) {
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
  }
}
</script>

<style lang="scss">
@import "../assets/var.scss";
.lu-menu {
  list-style: none;
  margin-bottom: 0;
  font-size: 14px;
  border-right: 1px solid $lu-border;
  width: 220px;
}
</style>

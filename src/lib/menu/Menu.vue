<template>
  <ul class="lu-menu">
    <slot/>
  </ul>
</template>

<script lang="ts">
import {computed, provide, Ref, ref} from 'vue'

export const LUMenuSelectedKey = "LUMenuSelectedKey"

type SelectedKey = string | number

export type SelectedKeyContext = {
  selectedKey: Ref<SelectedKey>;
  setSelectedKey: (key: SelectedKey) => void;
}

export default {
  props: {
    defaultSelectedKey: [String, Number],
    selectedKey: [String, Number]
  },
  setup(props, context) {
    const selected = ref<SelectedKey>(props.defaultSelectedKey);

    const selectedKey = computed(() => {
      if (props.selectedKey !== undefined) {
        return props.selectedKey;
      }
      return selected.value;
    })

    const setSelectedKey = (key: SelectedKey) => {
      selected.value = key;
      context.emit("update:select-key", key);

    }

    provide(LUMenuSelectedKey, {
      selectedKey,
      setSelectedKey
    });

    return {

    }
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

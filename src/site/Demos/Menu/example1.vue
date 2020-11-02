<demo>
title:顶栏
$
subTitle:适用广泛的基础用法。
</demo>

<template>
  <div class="row">
    <lu-menu
        mode="horizontal"
        default-selected-key="option-1"
        @select="onSelect"
        @open-change="onOpenChange"
    >
      <lu-menu-item value="option-1">Navigation 1</lu-menu-item>
      <lu-sub-menu value="navigation-2">
        <template v-slot:title>Navigation 2</template>
        <lu-menu-item value="option-3">option-3</lu-menu-item>
        <lu-menu-item value="option-4">option-4</lu-menu-item>
        <lu-sub-menu value="navigation-3">
          <template v-slot:title>Navigation 3</template>
          <lu-menu-item value="option-5">option-5</lu-menu-item>
          <lu-menu-item value="option-6">option-6</lu-menu-item>
        </lu-sub-menu>
      </lu-sub-menu>
    </lu-menu>
  </div>
</template>

<script>
import {Menu, MenuGroup, MenuItem, SubMenu} from "../../../lib";

export default {
  components: {
    "lu-menu": Menu,
    "lu-menu-group": MenuGroup,
    "lu-menu-item": MenuItem,
    "lu-sub-menu": SubMenu
  }
}
</script>

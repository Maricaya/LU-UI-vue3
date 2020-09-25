<template>
  <lu-menu style="height: 100%">
    <lu-menu-item value="intro" @click="onClick('intro')">介绍</lu-menu-item>
    <lu-menu-item value="install" @click="onClick('install')">安装</lu-menu-item>
    <lu-menu-item value="getStarted" @click="onClick('getStarted')">开始</lu-menu-item>
    <lu-menu-group>
      <template v-slot:title>通用</template>
      <lu-menu-item value="button" @click="onClick('button')">Button 按钮</lu-menu-item>
    </lu-menu-group>
    <lu-menu-group>
      <template v-slot:title>导航</template>
      <lu-menu-item value="menu" @click="onClick('menu')">Menu 导航菜单</lu-menu-item>
    </lu-menu-group>
    <lu-menu-group>
      <template v-slot:title>数据录入</template>
      <lu-menu-item value="switch" @click="onClick('switch')">Switch 开关</lu-menu-item>
      <lu-menu-item value="dialog" @click="onClick('dialog')">Dialog 开关</lu-menu-item>
    </lu-menu-group>
    <lu-menu-group>
      <template v-slot:title>数据展示</template>
      <lu-menu-item value="tabs" @click="onClick('tabs')">Tabs 标签页</lu-menu-item>
      <lu-menu-item value="drawer" @click="onClick('drawer')">Drawer 抽屉</lu-menu-item>
    </lu-menu-group>
  </lu-menu>
</template>

<script lang="ts">
import {Menu, MenuGroup, MenuItem} from '../../lib'
import {useRouter} from 'vue-router'

export default {
  components: {
    "lu-menu": Menu,
    "lu-menu-group": MenuGroup,
    "lu-menu-item": MenuItem,
  },
  setup() {
    const router = useRouter();

    const onClick = (key: string) => {
      router.push(`/doc/${key}`);
    }
    return {onClick};
  }
}
</script>

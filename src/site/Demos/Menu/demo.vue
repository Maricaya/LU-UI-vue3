<template>
  <h1 class="title"> Menu </h1>
  <p>为网站提供导航功能的菜单。</p>

  <!-- basic -->
  <Demo :component="example1">
    导航菜单默认为垂直模式，通过mode属性可以使导航菜单变更为水平模式。另外，在菜单中通过submenu组件可以生成二级菜单。Menu 还提供了background-color、text-color和active-text-color，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。
  </Demo>
  <Demo :component="example2">
    通过el-menu-item-group组件可以实现菜单进行分组，分组名可以通过title属性直接设定，也可以通过具名 slot 来设定。
  </Demo>
</template>

<script>
import example1 from "./example1.vue";
import example2 from "./example2.vue";

import Demo from "../../components/Demo.vue"

export default {
  components: {Demo},
  setup () {
    const onClick = () => {
      console.log('onClick')
    }
    return {onClick, example1, example2}
  }
}
</script>

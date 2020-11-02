<template>
  <h1 class="title"> Tabs </h1>
  <p>分隔内容上有关联但属于不同类别的数据集合。</p>

  <!-- basic -->
  <Demo :component="example1">
    Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。
  </Demo>
</template>

<script>
import example1 from "./example1.vue";

import Demo from "../../components/Demo.vue"

export default {
  components: {Demo},
  setup () {
    const onClick = () => {
      console.log('onClick')
    }
    return {onClick, example1}
  }
}
</script>

<template>
  <h1 class="title"> Dialog </h1>
  <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>

  <!-- basic -->
  <Demo :component="example1">
    需要设置visible属性，它接收Boolean，当为true时显示 Dialog。Dialog 分为两个部分：body和footer，footer需要具名为footer的slot。title属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了before-close的用法。
  </Demo>
  <Demo :component="example2">
     一句代码打开 Dialog。
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

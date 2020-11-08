<template>
    <h1 class="title"> Button </h1>
    <p>常用的操作按钮。</p>

    <!-- basic -->
    <Demo :component="example1">
      使用 <code>theme</code> 属性来定义 Button 的样式。
    </Demo>

    <!-- size -->
    <Demo :component="example2">
      额外的尺寸：<code>big</code>、<code></code><code>small</code>，通过设置 <code>size</code> 属性来配置它们。
    </Demo>

    <!-- type -->
    <Demo :component="example3">
      使用 level 属性来定义 Button 的样式。
    </Demo>

    <!-- disabled  -->
    <Demo :component="example5">
      要设置为 loading 状态，只要设置loading属性为true即可。
    </Demo>


</template>

<script>
  import {Button} from "../../../lib";

  import example1 from "./example1.vue";
  import example2 from "./example2.vue";
  import example3 from "./example3.vue";
  import example4 from "./example4.vue";
  import example5 from "./example5.vue";
  import Demo from "../../components/Demo.vue"

  export default {
    name: "ButtonDemo",
    components: {Button, Demo},
    setup () {
      const onClick = () => {
        console.log('onClick')
      }
      return {onClick, example1, example2, example3, example4, example5}
    }
  }
</script>

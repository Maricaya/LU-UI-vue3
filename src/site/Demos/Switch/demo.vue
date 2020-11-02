<template>
  <h1 class="title"> Switch </h1>
  <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>

  <!-- basic -->
  <Demo :component="example1">
    绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。
  </Demo>
  <Demo :component="example2">
    设置disabled属性，接受一个Boolean，设置true即可禁用。
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

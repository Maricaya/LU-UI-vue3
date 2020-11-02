<demo>
title:基本用法
$
subTitle:基础的、简洁的标签页。
</demo>
<template>
  <tab-pane v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2222">内容2</Tab>
  </tab-pane>
</template>

<script lang="ts">
import {ref} from "vue";
import {Tab, TabPane} from '../../../lib'

export default {
  components: {Tab, TabPane},
  setup() {
    const x = ref('导航1')
    return {
      x
    }
  }
}
</script>

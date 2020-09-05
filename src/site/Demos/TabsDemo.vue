<template>
	<div>Tabs 示例</div>
	<h2>示例 1</h2>
	<tab-pane v-model:selected="x">
		<Tab title="导航1">内容1</Tab>
		<Tab title="导航2222">内容2</Tab>
	</tab-pane>
</template>

<script lang="ts">
import {Tab, TabPane} from '../../lib'

import {ref} from 'vue'

export default {
  name: "TabsDemo",
  components: {Tab, TabPane},
  setup () {
    const x = ref('导航1')
    return {
      x
    }
  }
}
</script>

<style scoped>

</style>

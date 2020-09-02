<template>
	<div>Tabs 示例</div>
	<h2>示例 1</h2>
	<Tabs v-model:selected="x">
		<Tab title="导航1">内容1</Tab>
		<Tab title="导航2222">内容2</Tab>
	</Tabs>
</template>

<script lang="ts">
  import Tab from '../../src/lib/Tab.vue'
  import Tabs from '../../src/lib/Tabs.vue'
  import {ref} from 'vue'
	
  export default {
    name: "TabsDemo",
	  components: {Tabs, Tab},
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

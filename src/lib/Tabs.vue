<template>
<div>
	<div v-for="(t, index) in titles" :key="t">{{index}}</div>
	<component v-for="(c, index) in defaults" :is="c" :key="index" />
</div>
</template>

<script lang="ts">
  import Tab from './Tab.vue'

  export default {
    name: "Tabs",
	  setup (props, context) {
      const defaults = context.slots.default()
      defaults.forEach((tag) => {
        if (tag.type !== Tab) {
          throw new Error('Tabs 子标签必须是 Tab')
        }
      })
      const titles = defaults.forEach((tag) => {tag.title})
		  return {
        defaults,
			  titles
		  }
	  }
  }
</script>

<style scoped>

</style>

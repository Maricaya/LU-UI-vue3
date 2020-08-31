<template>
		<div>dialog 示例</div>
		<h1>示例 1</h1>
		<Button @click="toggle">toggle</Button>
		<Dialog v-model:visible="x" :close-on-click-overlay="false" :ok="f1" :cancel="f2">
			<template v-slot:title>
				<h1>标题</h1>
			</template>
			<template v-slot:content>
				<strong>hi</strong>
				<div>hi</div>
			</template>
		</Dialog>
</template>

<script>
  import Dialog from '../lib/Dialog.vue'
  import Button from '../lib/Button.vue'
  import {ref} from 'vue'
  export default {
	  components: {
      Dialog,
		  Button
	  },
	  setup () {
	    const x = ref(false)
      const f1 = () => {
	      console.log('1')
	      return false
      };
      const f2 = () => {
        console.log('2')
	      return true
      };
		  const toggle = () => {x.value = !x.value}
		  return {
	      x,
			  toggle,
			  f1, f2
		  }
	  }
  }
</script>

<style scoped>

</style>

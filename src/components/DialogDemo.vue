<template>
		<div>dialog 示例</div>
		<h2>示例 1</h2>
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
		<h2>示例 2</h2>
		<Button @click="showDialog">toggle</Button>
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
  import {openDialog} from "../lib/openDialog"
  
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
		  const showDialog = () => {
		    openDialog({
			    title:'标题',
			    content: '内容',
          ok() {console.log('ok')},
          cancel() {console.log('cancel')}
		    })
		  }
		  return {
	      x,
			  toggle,
			  f1, f2,
        showDialog
		  }
	  }
  }
</script>

<style scoped>

</style>

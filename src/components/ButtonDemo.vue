<template>
	<div>
		<Button @click="onClick" size="small">你好</Button>
	</div>
</template>

<script>
  import Button from "../lib/Button.vue";
	
  export default {
    name: "ButtonDemo",
    components: {Button},
    setup () {
      const onClick = () => {
        console.log('onClick')
      }
      return {onClick}
    }
  }
</script>

<style lang="scss" scoped>

</style>

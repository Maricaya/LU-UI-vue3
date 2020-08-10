<template>
	<button @click="toggle" :class="{checked}">
		<slot />
	</button>
</template>

<script lang="ts">
  export default {
    setup() {
    
    }
  };
</script>

<style lang="scss" scoped>

</style>

<template>
	<div>
		<Topnav/>
		<div class="banner">
			<h1>Blue UI</h1>
			<h2>一个厉害的 UI 框架</h2>
			<p class="actions">
				<a href="https://github.com/Maricaya/blue-Elements">GitHub</a>
				<router-link to="/doc">开始</router-link>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
	import Topnav from '../components/Topnav.vue';
  export default {
    name: "Home",
	  components: {Topnav}
  }
</script>

<style lang="scss" scoped>
</style>

<template>
	<div class="topnav">
		<div class="logo" @click="toggleMenu">LOGO</div>
		<div class="menu">
			<ul>
				<li>菜单1</li>
				<li>菜单2</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
  import {inject, Ref} from "vue";

  export default {
    name: "Topnav",
    setup() {
      const asideVisible = inject<Ref<boolean>>("asideVisible");
      const toggleMenu = () => {
        asideVisible.value = !asideVisible.value
      };
	    return {toggleMenu}
    }
  };
</script>

<style lang="scss" scoped>

</style>

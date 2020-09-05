<template>
	<div class="container">
		<div class="title">Menu 示例</div>
		<h2>纵向菜单</h2>
		<div class="row">
			<lu-menu
        default-selected-key="option-1"
				@select="onSelect"
				@open-change="onOpenChange">
        <lu-menu-item value="option-1">Navigation one</lu-menu-item>
        <lu-menu-item value="option-2">Navigation two</lu-menu-item>
        <lu-menu-item value="option-3" :disabled="true">Navigation three</lu-menu-item>
			</lu-menu>
		</div>
	</div>
</template>

<script lang="ts">
  import { Menu, MenuGroup, MenuItem, SubMenu } from "../../lib";

  export default {
    components: {
      "lu-menu": Menu,
      "lu-menu-group": MenuGroup,
      "lu-menu-item": MenuItem,
      "lu-sub-menu": SubMenu,
    },
    setup () {
      const onSelect = () => {}
      const onOpenChange = () => {}
      return { onSelect, onOpenChange }
    }
  }
</script>

<style scoped>

</style>

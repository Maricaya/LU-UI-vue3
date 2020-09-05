<template>
	<div class="container">
		<div class="title">Menu 示例</div>
		<h2>纵向菜单</h2>
		<div class="row">
			<lu-menu
        default-selected-key="option-1"
        :default-open-keys="['navigation-1']"
				@select="onSelect"
				@open-change="onOpenChange">
        <lu-menu-item value="option-1">option 1</lu-menu-item>
        <lu-menu-item value="option-2">option 2</lu-menu-item>
        <lu-menu-item value="option-3" :disabled="true">Navigation three</lu-menu-item>
			  <lu-sub-menu value="navigation-1">
          <template v-slot:title>Navigation One</template>
          <lu-menu-item value="option-4">option 4</lu-menu-item>
          <lu-menu-item value="option-5">option 5</lu-menu-item>
        </lu-sub-menu>
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

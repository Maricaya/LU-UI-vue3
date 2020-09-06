<template>
	<div>
		<h2 class="title">Menu 示例</h2>
    <p>为网站提供导航功能的菜单。</p>
    <h3 class="sub-title">横向菜单</h3>
    <div class="row">
      <lu-menu
        mode="horizontal"
        default-selected-key="option-1"
        @select="onSelect"
        @open-change="onOpenChange"
      >
        <lu-menu-item value="option-1">
          Navigation 1
        </lu-menu-item>
      </lu-menu>
    </div>
    <h3 class="sub-title">纵向菜单</h3>
		<div class="row">
			<lu-menu
        style="width: 220px"
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
        <lu-sub-menu value="navigation-2">
          <template v-slot:title>Navigation Two</template>
          <lu-menu-group>
            <template v-slot:title>Group One</template>
          </lu-menu-group>
          <lu-menu-item value="option-6">Option 6</lu-menu-item>
          <lu-menu-item value="option-7">Option 7</lu-menu-item>
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
      const onSelect = (selectKey) => {
        console.log(selectKey);
      }
      const onOpenChange = (b) => {
        console.log(b);
      }
      return { onSelect, onOpenChange }
    }
  }
</script>

<style scoped>

</style>

<template>
	<div class="layout">
		<top-nav class="nav"/>
		<div class="content">
			<aside v-if="asideVisible">
        <lu-menu>
          <lu-menu-item value="overview">组件列表</lu-menu-item>
          <lu-menu-group>
            <template v-slot:title>通用</template>
            <lu-menu-item value="button" @click="onClick('button')">Button 组建</lu-menu-item>
          </lu-menu-group>
          <lu-menu-group>
            <template v-slot:title>导航</template>
            <lu-menu-item value="menu" @click="onClick('menu')">Menu 导航菜单</lu-menu-item>
          </lu-menu-group>
          <lu-menu-group>
            <template v-slot:title>数据录入</template>
            <lu-menu-item value="switch" @click="onClick('switch')">Switch 开关</lu-menu-item>
            <lu-menu-item value="dialog" @click="onClick('dialog')">Dialog 开关</lu-menu-item>
          </lu-menu-group>
          <lu-menu-group>
            <template v-slot:title>数据展示</template>
            <lu-menu-item value="tabs" @click="onClick('tabs')">Tabs 导航菜单</lu-menu-item>
          </lu-menu-group>
        </lu-menu>
			</aside>
			<main>
				<router-view></router-view>
			</main>
		</div>
	</div>
</template>

<script lang="ts">
  import TopNav from "../components/Topnav.vue";
  import {inject, Ref} from "vue";
  import {Menu, MenuGroup, MenuItem} from '../../lib'
  import {useRouter} from "vue-router";

  export default {
    name: "Doc",
    components: {
      TopNav,
      "lu-menu": Menu,
      "lu-menu-group": MenuGroup,
      "lu-menu-item": MenuItem,
    },
    setup() {
      const router = useRouter();

      const asideVisible = inject<Ref<boolean>>("asideVisible");
      const onClick = (key: string) => {
        router.push(`/doc/${key}`);
      }
      return {asideVisible, onClick};
    }
  };
</script>

<style lang="scss" scoped>
	.layout {
		display: flex;
		flex-direction: column;
		height: 100vh;
		> .nav {
			flex-shrink: 0;
		}
		> .content {
			flex-grow: 1;
			padding-top: 60px;
			padding-left: 240px;
			@media (max-width: 500px) {
				padding-left: 0;
			}
		}
	}
	.content {
		display: flex;
		> aside {
      background: #fff;
			flex-shrink: 0;
		}
		> main {
			flex-grow: 1;
			padding: 16px;
		}
	}
	aside {
		width: 220px;
		position: fixed;
		top: 0;
		left: 0;
		padding: 70px 16px 16px;
		height: 100%;
		> h2 {
			margin-bottom: 4px;
		}
		> ol {
			> li {
				padding: 4px 0;
			}
		}
		main {
			overflow: auto;
		}
	}
</style>

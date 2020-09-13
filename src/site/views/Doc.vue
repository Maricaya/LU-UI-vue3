<template>
	<div class="layout">
		<top-nav toggle-menu-button-visible class="nav"/>
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
  import TopNav from "../components/TopNav.vue";
  import MiddleNav from "../components/MiddleNav.vue";
  import {inject, Ref} from "vue";
  import {Menu, MenuGroup, MenuItem} from '../../lib'
  import {useRouter} from "vue-router";

  export default {
    name: "Doc",
    components: {
      TopNav,
      MiddleNav,
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

<style lang="scss">
	.layout {
		//display: flex;
		//flex-direction: column;
		//height: 100vh;
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
    .title {
      font-weight: 400;
      color: #1f2f3d;
    }
    p {
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;
      margin-block-start: 1em;
      margin-block-end: 1em;
    }
    h3 {
      margin: 55px 0 20px;
    }
    .row {
      margin-bottom: 16px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
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
		width: 235px;
		position: fixed;
		top: 0;
		left: 0;
		padding: 70px 0 16px;
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

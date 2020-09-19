<template>
	<div class="layout">
		<top-nav toggle-menu-button-visible
             class="nav"
             @click="openDrawer"/>
		<div class="content">
			<aside>
        <lu-drawer ref="drawer" v-if="!asideVisible">
          <aside-menu/>
        </lu-drawer>
        <aside-menu  v-else/>
      </aside>
			<main>
				<router-view></router-view>
			</main>
		</div>
	</div>
</template>

<script lang="ts">
  import TopNav from "../components/TopNav.vue";
  import AsideMenu from "../components/AsideMenu.vue";
  import {inject, ref, Ref} from 'vue'
  import {Drawer} from '../../lib'

  export default {
    name: "Doc",
    components: {
      TopNav,
      AsideMenu,
      "lu-drawer": Drawer
    },
    setup() {
      const asideVisible = inject<Ref<boolean>>("asideVisible");
      console.log('asideVisible', asideVisible)
      const drawer = ref(null);
      const openDrawer = () => {
        drawer.value.toggleDrawer()
      }
      return {asideVisible, drawer, openDrawer};
    }
  };
</script>

<style lang="scss">
	.layout {
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
      z-index: 3;
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

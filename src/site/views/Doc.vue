<template>
	<div class="layout">
		<top-nav toggle-menu-button-visible
             class="nav"
             @click="openDrawer"/>
		<div class="content">
			<aside v-if="asideVisible">
        <lu-drawer ref="drawer" class="show-drawer">
          <aside-menu/>
        </lu-drawer>
        <aside-menu class="show-normal-menu"/>
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
      const drawer = ref(null);
      const openDrawer = () => {
        drawer.value.toggleDrawer()
      }
      return {
        asideVisible,
        drawer,
        openDrawer
      };
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
			padding-top: 80px;
			padding-left: 250px;
			@media (max-width: 500px) {
				padding-left: 0;
			}
		}
	}
	.content {
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
      .show-drawer {
        display: none;
        @media (max-width: 500px) {
          display: block;
        }
      }
      .show-normal-menu {
        @media (max-width: 500px) {
          display: none;
        }
      }
		}
		> main {
			flex-grow: 1;
      color: rgba(0,0,0,.87);
      padding: 20px 50px;
      line-height: 1.5;
      min-width: 700px;
      background-color: #fff;
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

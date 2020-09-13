<template>
  <div class="top-nav">
    <router-link class="logo" to="/">
      <svg class="icon">
        <use xlink:href="#icon-lu"></use>
      </svg>
      &nbsp;&nbsp;&nbsp;LU UI
    </router-link>
    <ul class="menu">
      <li><router-link to="/doc">文档</router-link></li>
      <li><router-link to="/doc"><svg>
        <use xlink:href="#icon-github"></use>
      </svg></router-link></li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue'

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value
    }
    return {toggleMenu}
  }
}
</script>

<style lang="scss" scoped>
.top-nav {
  background: #3f51b5;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;

  .logo {
    padding: 0 16px;
  }
  svg {
    width: 32px;
    height: 32px;
    fill: white;
  }
  > .logo {
    max-width: 20em;
    margin-right: auto;
    display: flex;
    align-items: center;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    align-items: center;
    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    background: red;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out(black, 0.9);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>

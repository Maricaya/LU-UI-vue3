<template>
  <section class="hero is-fullheight-with-navbar section-w-drawer">
    <div class="hero-head">
      <label for="drawer-check"></label>
      <input type="checkbox" id="drawer-check" />
      <div class="drawer is-hidden" id="drawer">
        <slot/>
      </div>
      <div class="drawer-container" @click="onOutside"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { ClickOutside } from "../directives/ClickOutside.ts";

export default {
  name: 'lu-drawer',
  directives: { "click-outside": ClickOutside },
  props: {},
  setup () {
    const toggleDrawer = () =>  {
      const check = document.getElementById("drawer-check");
      if (check !== null && check !== undefined) {
        check.click();
      }
    }
    const onOutside = () => {
      toggleDrawer()
    }

    return {
      onOutside,
      toggleDrawer
    }
  }
}
</script>

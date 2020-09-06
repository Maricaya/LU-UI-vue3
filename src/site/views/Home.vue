<template>
  <div>
    <Top-nav/>
    <div class="banner">
      <h1>Blue UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/Maricaya/blue-Elements">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";

export default {
  name: "Home",
  components: {TopNav}
};
</script>

<style lang="scss">
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>

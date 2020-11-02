<template>
  <div>
    <div class="topnavAndBanner">
      <Top-nav/>
      <div class="banner">
        <h1 class="title">LU UI</h1>
        <h2 class="description">一个基于 Vue3 的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/Maricaya/blue-Elements">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
      </ul>
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
      </ul>
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'

export default {
  name: 'Home',
  components: {TopNav}
}
</script>

<style lang="scss" scoped>
$green: rgb(30, 64, 200);
$border-radius: 4px;
$color: rgb(9, 24, 65);
.topnavAndBanner {
  background: linear-gradient(145deg, rgb(2, 0, 36) 0%, rgb(234, 240, 249) 0%, rgb(221, 231, 246) 100%);
}
.features {
  margin: 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;
    >ul {
      > li{
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.333%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text
      }
    }
  }
}
.banner {
  padding: 100px 0;
  color: $color;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .title {
    font-size: 38px;
    margin: 20px auto;
    font-weight: bolder;
  }
  > .description {
    font-size: 28px;
    font-weight: 500;
  }
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      border-radius: $border-radius;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>

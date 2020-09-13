<template>
  <div class="middle-nav">
    <h1>
      Components
    </h1>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss" scoped>
.middle-nav {
  width: 100%;
  color: white;
  padding-left: 20px;
  background: #3f51b5;
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform,margin-left,margin-right;
  display: flex;
  align-items: center;
  margin-top: 67px;
  //z-index: 20;
  > h1 {
    font-weight: 300;
    margin: 0;
    padding: 28px 8px;
    font-size: 20px;
  }
}
</style>

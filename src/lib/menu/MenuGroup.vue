<template>
 <li class="lu-menu-group">
   <div class="lu-menu-group-title">
     <slot name="title"/>
   </div>
   <ul class="lu-menu-group-list">
     <slot/>
   </ul>
 </li>
</template>

<script lang="ts">
export default {
  
}
</script>

<style lang="scss">
@import "../assets/var.scss";

.lu-menu-group {
  > .lu-menu-group-title {
    font-size: 12px;
    padding: 12px 24px 12px 36px;
    color: $lu-disabled;
  }

  > .lu-menu-group-list {
    list-style: none;
    margin-bottom: 0;

    .lu-menu-item {
      padding: 12px 24px 12px 48px;
    }
  }
}
</style>
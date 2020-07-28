<template>
  <div>导航栏 |
    <router-link to="/"> mon </router-link>
  </div>
  <hr/>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Monica></Monica>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Monica from './components/Monica.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Monica
  }
}
</script>

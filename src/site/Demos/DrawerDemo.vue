<template>
  <div>
    <button @click="openDrawer">open drawer</button>
    <lu-drawer ref="drawer">
      <div style="margin-top: 20px">
        123
      </div>
    </lu-drawer>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { Drawer } from '../../lib';

export default {
  components: {
    "lu-drawer": Drawer
  },
  setup () {
    const drawer = ref(null);
    onMounted(() => {
        console.log({...drawer.value})
    })
    const openDrawer = () => {
      drawer.value.toggleDrawer()
    }
    return {
      openDrawer, drawer
    }
  }
}
</script>

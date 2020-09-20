<template>
  <Switch v-model:value="checked"></Switch>
</template>

<script lang="ts">
import {Switch} from "../../lib";
import {ref} from "vue";

export default {
  components: {Switch},
  setup() {
    const checked = ref(true);
    return {checked};
  }
}
</script>
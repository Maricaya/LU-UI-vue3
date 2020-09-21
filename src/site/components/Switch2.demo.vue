<demo>支持 disabled</demo>
<template>
  <Switch v-model:value="checked" disabled></Switch>
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
<demo>
title:基本用法
$
subTitle:基本的用法。
</demo>
<template>
<Switch v-model:value="checked"></Switch>
</template>

<script lang="ts">
import {ref} from "vue";
import {Switch} from '../../../lib'

export default {
  components: {Switch},
  setup() {
    const checked = ref(true);
    return {checked};
  }
}
</script>

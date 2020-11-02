<demo>
title:基本用法
$
subTitle:Dialog 弹出一个对话框，适合需要定制性更大的场景。
</demo>

<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :close-on-click-overlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <h1>标题</h1>
    </template>
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi</div>
    </template>
  </Dialog>
</template>

<script>
import {ref} from "vue"
import {Button, Dialog} from "../../../lib"

export default {
  components: {
    Dialog,
    Button
  },
  setup () {
    const x = ref(false)
    const f1 = () => {
      return false
    };
    const f2 = () => {
      return true
    };
    const toggle = () => {x.value = !x.value}
    return {
      x,
      toggle,
      f1, f2
    }
  }
}
</script>

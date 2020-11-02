<demo>
title:代码打开
$
subTitle:一句话打开 Dialog。
</demo>

<template>
  <Button @click="showDialog">toggle</Button>
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
import {Button, Dialog, openDialog} from "../../../lib"

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
    const showDialog = () => {
      openDialog({
        title:'标题',
        content: '内容',
        ok() {console.log('ok')},
        cancel() {console.log('cancel')}
      })
    }
    return {
      x,
      toggle,
      f1, f2,
      showDialog
    }
  }
}
</script>

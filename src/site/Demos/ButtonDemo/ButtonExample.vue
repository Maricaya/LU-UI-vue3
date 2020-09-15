<template>
  <Example
      title="Default Buttons"
      description="要创建纯按钮，请将 pure-button 类名称添加到任何">
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </Example>
</template>

<script>
  import {Button} from "../../../lib";
  import Example from "../../components/Example.vue"

  export default {
    components: {Button, Example}
  }
</script>

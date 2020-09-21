<template>
  <Example
      title="Default Buttons"
      description="There are primary button, default button, dashed button, text button and link button in antd.">
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

<demo>
title:禁用状态
$
subTitle:按钮不可用状态。
</demo>

<template>
  <Button disabled>禁用按钮</Button>
  <Button theme="link" disabled>禁用链接按钮</Button>
  <Button theme="text" disabled>禁用按钮</Button>
</template>

<script>
import {Button} from "../../../lib";

export default {
  components: {Button}
}
</script>

<demo>
title:加载中
$
subTitle:点击按钮后进行数据加载操作，在按钮上显示加载状态。
</demo>

<template>
  <div style="display: flex;">
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>

<script>
import {Button} from "../../../lib";

export default {
  components: {Button}
}
</script>

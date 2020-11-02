<demo>
title:基础用法
$
subTitle:基础的按钮用法。
</demo>

<template>
  <div>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要链接</Button>
    <Button theme="link">普通链接</Button>
    <Button theme="link" level="danger">危险链接</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要文字</Button>
    <Button theme="text">普通文字</Button>
    <Button theme="text" level="danger">危险文字</Button>
  </div>
</template>

<script>
import {Button} from "../../../lib";

export default {
  components: {Button}
}
</script>

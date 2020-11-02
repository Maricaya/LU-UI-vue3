<demo>
title:不同尺寸
$
subTitle:Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
</demo>

<template>
  <div>
    <Button size="big">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button size="small" theme="link">小小小</Button>
  </div>
  <div>
    <Button size="big" theme="text">大大大</Button>
    <Button theme="text">普普通</Button>
    <Button size="small" theme="text">小小小</Button>
  </div>
</template>

<script>
import {Button} from "../../../lib";

export default {
  components: {Button}
}
</script>

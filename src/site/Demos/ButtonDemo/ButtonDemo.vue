<template>
	<div class="header">
    <h2> Buttons </h2>
    <p>Angular Material buttons are native <\button> or <\a> elements enhanced with Material Design styling and ink ripples.</p>
  </div>
  <div class="content">
    <button-example/>
    <h3 class="content-subhead">示例2</h3>
    <p>介绍</p>
    <div class="example">
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
    </div>
<!--    <h2>示例3</h2>-->
<!--    <div>-->
<!--      <div>-->
<!--        <Button level="main">主要按钮</Button>-->
<!--        <Button>普通按钮</Button>-->
<!--        <Button level="danger">危险按钮</Button>-->
<!--      </div>-->
<!--      <div>-->
<!--        <Button theme="link" level="main">主要链接按钮</Button>-->
<!--        <Button theme="link">普通链接按钮</Button>-->
<!--        <Button theme="link" level="danger">危险链接按钮</Button>-->
<!--      </div>-->
<!--      <div>-->
<!--        <Button theme="text" level="main">主要文字按钮</Button>-->
<!--        <Button theme="text">普通文字按钮</Button>-->
<!--        <Button theme="text" level="danger">危险文字按钮</Button>-->
<!--      </div>-->
<!--    </div>-->
<!--    <h2>示例4</h2>-->
<!--    <div>-->
<!--      <Button disabled>禁用按钮</Button>-->
<!--      <Button theme="link" disabled>禁用链接按钮</Button>-->
<!--      <Button theme="text" disabled>禁用按钮</Button>-->
<!--    </div>-->
<!--    <h2>示例5</h2>-->
<!--    <div>-->
<!--      <Button loading>加载中</Button>-->
<!--      <Button>加载完毕</Button>-->
<!--    </div>-->
  </div>
</template>

<script>
  import {Button} from "../../../lib";
  import ButtonExample from "./ButtonExample.vue";

  export default {
    name: "ButtonDemo",
    components: {Button, ButtonExample},
    setup () {
      const onClick = () => {
        console.log('onClick')
      }
      return {onClick}
    }
  }
</script>

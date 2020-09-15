<template>
  <div class="content">
    <h3 class="content-subhead">
      {{title}}
    </h3>
    <p>
      {{description}}
    </p>
    <div class="example">
      <slot/>
    </div>
  </div>
</template>

<script>
import {Button} from "../../lib";

export default {
  name: "ButtonDemo",
  components: {Button},
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  }
}
</script>

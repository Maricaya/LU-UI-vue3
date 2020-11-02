<template>
  <section class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <p>{{component.__sourceCodeSubTitle}}</p>

    <div class="demo-component">
      <component :is="component" :key="component"/>
    </div>
    <div class="meta">
      <div class="description" v-if="$slots.default">
        <div class="description-slot">
          <p><slot></slot></p>
        </div>
      </div>
      <div class="demo-code">
        <pre class="language-html" v-html="html"></pre>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism-coy.css';
import {computed} from 'vue';
import {Button} from "../../lib";
const Prism = (window as any).Prism;

export default {
  props: {
    component: Object
  },
  components: {
    Button
  },
  setup(props) {
    console.log('Prism', Prism)
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })

    return {Prism, html};
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  > p {
    margin: 15px 0;
  }
  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  .meta{
    //background-color: #ecf8ff;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    .description {
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid #ebebeb;
      border-radius: 3px;
      font-size: 14px;
      line-height: 22px;
      color: #666;
      word-break: break-word;
      margin: 10px;
      background-color: #fff;
      .description-slot{
        code {
          color: #5e6d82;
          background-color: #e6effb;
          margin: 0 4px;
          display: inline-block;
          padding: 1px 5px;
          font-size: 12px;
          border-radius: 3px;
          height: 18px;
          line-height: 18px;
          font-family: Menlo,Monaco,Consolas,Courier,monospace;
        }
      }
    }
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>

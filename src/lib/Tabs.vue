<template>
<div class="lu-tabs">
	<div class="lu-tabs-nav">
		<div class="lu-tabs-nav-item" @click="select(t)" :class="{selected: t === selected}"
		     v-for="(t, index) in titles" :key="index">{{t}}</div>
		<div class="lu-tabs-nav-indicator"></div>
	</div>
	<div class="lu-tabs-content">
		<component class="lu-tabs-content-item" :is="current" :key="current" />
	</div>
</div>
</template>

<script lang="ts">
  import Tab from './Tab.vue'
  import {computed} from 'vue'

  export default {
    name: "Tabs",
	  props: {
      selected: {
        type: String
      }
	  },
	  setup (props, context) {
      const defaults = context.slots.default()
		  console.log('defaults', defaults)
      defaults.forEach((tag) => {
        if (tag.type !== Tab) {
          throw new Error('Tabs 子标签必须是 Tab')
        }
      })
		  const current = computed(() =>
        defaults.filter(tag =>
          tag.props.title === props.selected
        )[0]
		  )
      const titles = defaults.map(tag => tag.props.title)
		  const select = (title: string) => {
        context.emit('update:selected', title)
		  }
		  return {
        defaults,
			  titles,
			  current,
        select
		  }
	  }
  }
</script>

<style lang="scss">
	$blue: #40a9ff;
	$color: #333;
	$border-color: #d9d9d9;
	.lu-tabs {
		&-nav {
			display: flex;
			color: $color;
			border-bottom: 1px solid $border-color;
			&-item {
				padding: 8px 0;
				margin: 0 16px;
				cursor: pointer;
				&:first-child {
					margin-left: 0;
				}
				&.selected {
					color: $blue;
				}
			}
		}
		&-content {
			padding: 8px 0;
		}
	}
</style>

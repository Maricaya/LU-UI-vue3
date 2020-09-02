<template>
<div class="lu-tabs">
	<div class="lu-tabs-nav" ref="container">
		<div class="lu-tabs-nav-item" @click="select(t)" :class="{selected: t === selected}"
		     v-for="(t, index) in titles" :key="index" :ref="el => {if (t === selected) selectItem = el }"
		>{{t}}</div>
		<div class="lu-tabs-nav-indicator" ref="indicator"></div>
	</div>
	<div class="lu-tabs-content">
		<component class="lu-tabs-content-item" :is="current" :key="current" />
	</div>
</div>
</template>

<script lang="ts">
  import Tab from './Tab.vue'
  import {computed, ref, watchEffect} from 'vue'

  export default {
    name: "Tabs",
	  props: {
      selected: {
        type: String
      }
	  },
	  setup (props, context) {
		  const selectItem = ref<HTMLDivElement>(null)
      const indicator = ref<HTMLDivElement>(null)
      const container = ref<HTMLDivElement>(null)
		  watchEffect(() => {
        const {width} = selectItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const {left: left1} = container.value.getBoundingClientRect()
        const {left: left2 } = selectItem.value.getBoundingClientRect()
        indicator.value.style.left = left2 - left1 + 'px'
		  })
      const defaults = context.slots.default()
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
        selectItem,
        indicator,
        container,
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
			position: relative;
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
			&-indicator {
				position: absolute;
				height: 3px;
				background: $blue;
				left: 0;
				bottom: -1px;
				width: 100px;
				transition: all 250ms;
			}
		}
		&-content {
			padding: 8px 0;
		}
	}
</style>

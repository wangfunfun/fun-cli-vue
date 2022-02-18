<script lang="ts">
/**
 * 名称：自定义svg图标
 * ==================
 * = svg图标存放目录： /src/assets/svgs
 * = 使用方法：<svg-icon name="logo"></svg-icon>
 * = 可使用属性：className, width, height, color, style, symbolId, prefix, name
 * ==================
 */

import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '20px',
    },
    height: {
      type: String,
      default: '20px',
    },
    className: {
      type: String,
      default: '',
    },
    style: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const symbolId = computed(
      () => `#${props.prefix}-${props.name.replace('icon-', '')}`
    )
    return { symbolId }
  },
})
</script>

<template>
  <svg
    aria-hidden="true"
    :class="`iconfont ${className}`"
    :style="`width:${width};height:${height};color:${color};${style}`"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<style lang="scss" scoped></style>

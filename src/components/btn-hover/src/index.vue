<script lang="ts" setup>
import { Placement } from 'element-plus'
import { BuildPropType } from 'element-plus/lib/utils'

interface Props {
  showTooltip?: boolean
  tooltip?: string
  placement?: BuildPropType<StringConstructor, Placement, unknown> | undefined
}

const props = withDefaults(defineProps<Props>(), {
  showTooltip: false,
  tooltip: '',
  placement: 'bottom',
})
</script>

<template>
  <div class="hover flex-start" v-if="!props.showTooltip">
    <slot name="content"></slot>
  </div>
  <el-tooltip :content="props.tooltip" :placement="props.placement" v-else>
    <div class="hover flex-start">
      <slot name="content"></slot>
    </div>
  </el-tooltip>
</template>

<style lang="scss" scoped>
.hover {
  padding: 14px;
  transition: all 0.2s ease-out;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: rgba($color: #000000, $alpha: 0.06);
    transition: all 0.2s ease-in;
  }
}
</style>

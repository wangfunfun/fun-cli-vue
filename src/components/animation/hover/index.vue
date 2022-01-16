<script lang="ts" setup>
import { NTooltip } from 'naive-ui'
import { Placement } from 'naive-ui/lib/drawer/src/DrawerBodyWrapper'

interface Props {
  showTooltip?: boolean
  tooltip?: string
  placement?: Placement | undefined
}

const props = withDefaults(defineProps<Props>(), {
  showTooltip: false,
  tooltip: '',
  placement: 'bottom'
})
</script>

<template>
  <div class="hover flex-start" v-if="!props.showTooltip">
    <slot name="content"></slot>
  </div>
  <n-tooltip :placement="props.placement" trigger="hover" v-else>
    <template #trigger>
      <div class="hover flex-start">
        <slot name="content"></slot>
      </div>
    </template>
    <span>{{ props.tooltip }}</span>
  </n-tooltip>
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

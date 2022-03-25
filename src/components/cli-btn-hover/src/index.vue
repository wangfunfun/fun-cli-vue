<script lang="ts">
import { Placement } from 'element-plus'
import { BuildPropType } from 'element-plus/lib/utils'
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'cli-btn-hover',
  props: {
    showTooltip: {
      type: Boolean,
      default: false,
    },
    tooltip: {
      type: String,
      defualt: '',
    },
    placement: {
      type: String,
      defualt: 'bottom',
    },
  },
  setup(props) {
    const placement: any =
      props.placement ||
      ref<BuildPropType<StringConstructor, Placement, unknown> | undefined>()

    return {
      showTooltip: props.showTooltip,
      tooltip: props.tooltip,
      placement,
    }
  },
})
</script>

<template>
  <div class="hover flex-start" v-if="!showTooltip">
    <slot name="content"></slot>
  </div>
  <el-tooltip :content="tooltip" :placement="placement" v-else>
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

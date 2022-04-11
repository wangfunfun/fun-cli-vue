<script lang="ts" setup>
import screenfull from 'screenfull'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

interface Props {
  iconSize?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: 20,
})

const { t } = useI18n()

const isFullscreen = ref<boolean>(false)

const fullscreen = () => {
  if (!screenfull?.isEnabled) {
    ElMessage.error('您的浏览器不能全屏')
    return false
  }
  screenfull.request()
  isFullscreen.value = true
}

const exitFullscreen = () => {
  screenfull.exit()
  isFullscreen.value = false
}
</script>

<template>
  <cli-btn-hover
    showTooltip
    :tooltip="
      isFullscreen ? t('tooltip.exitFullscreen') : t('tooltip.fullscreen')
    "
  >
    <template #content>
      <el-icon :size="props.iconSize">
        <cli-svg-icon
          name="Contract"
          v-if="isFullscreen"
          @click="exitFullscreen"
        ></cli-svg-icon>
        <cli-svg-icon name="Expand" v-else @click="fullscreen"></cli-svg-icon>
      </el-icon>
    </template>
  </cli-btn-hover>
</template>

<style lang="scss" scoped></style>

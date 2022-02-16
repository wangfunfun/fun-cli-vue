<script lang="ts" setup>
import { FullscreenExitOutlined, FullscreenOutlined } from '@vicons/antd'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { Hover } from '@/components/animation'

// props

interface Props {
  iconSize?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: 20,
})

const { t } = useI18n()

const isFullscreen = ref<boolean>(false)
</script>

<template>
  <Hover
    showTooltip
    :tooltip="
      isFullscreen ? t('tooltip.exitFullscreen') : t('tooltip.fullscreen')
    "
  >
    <template #content>
      <el-icon :size="props.iconSize">
        <FullscreenExitOutlined v-if="isFullscreen"></FullscreenExitOutlined>
        <FullscreenOutlined v-else></FullscreenOutlined>
      </el-icon>
    </template>
  </Hover>
</template>

<style lang="scss" scoped></style>

<script lang="ts" setup>
import { SyncOutlined } from '@vicons/antd'
import { useI18n } from 'vue-i18n'
import { Hover } from '@/components/animation'

interface Props {
  iconSize?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: 20,
})

const { t } = useI18n()
</script>

<template>
  <Hover showTooltip :tooltip="t('tooltip.refresh')">
    <template #content>
      <el-icon :size="props.iconSize">
        <SyncOutlined></SyncOutlined>
      </el-icon>
    </template>
  </Hover>
</template>

<style lang="scss" scoped></style>

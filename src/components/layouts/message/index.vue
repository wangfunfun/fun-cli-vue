<script lang="ts" setup>
import { NIcon } from 'naive-ui'
import { BellOutlined } from '@vicons/antd'
import { useI18n } from 'vue-i18n'
import { Hover } from '@/components/animation'

// props

interface Props {
  iconSize?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: 20
})

// i18n

const { t } = useI18n()
</script>

<template>
  <Hover showTooltip :tooltip="t('tooltip.message')">
    <template #content>
      <n-icon :size="props.iconSize">
        <BellOutlined></BellOutlined>
      </n-icon>
    </template>
  </Hover>
</template>

<style lang="scss" scoped></style>

<script lang="ts" setup>
/**
 * @name search
 * a component to global seach
 */

import { NIcon } from 'naive-ui'
import { SearchOutlined } from '@vicons/antd'
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
  <Hover showTooltip :tooltip="t('tooltip.search')">
    <template #content>
      <n-icon :size="props.iconSize">
        <SearchOutlined></SearchOutlined>
      </n-icon>
    </template>
  </Hover>
</template>

<style lang="scss" scoped></style>

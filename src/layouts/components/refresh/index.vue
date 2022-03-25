<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

interface Props {
  iconSize?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: 20,
})

const { t } = useI18n()
</script>

<template>
  <cli-btn-hover showTooltip :tooltip="t('tooltip.refresh')">
    <template #content>
       <cli-svg-icon name="Refresh"></cli-svg-icon>
    </template>
  </cli-btn-hover>
</template>

<style lang="scss" scoped></style>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import BtnHover from '@/components/btn-hover'

interface Props {
  iconSize?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: 20,
})

const { t } = useI18n()
</script>

<template>
  <BtnHover showTooltip :tooltip="t('tooltip.refresh')">
    <template #content>
       <SvgIcon name="Refresh"></SvgIcon>
    </template>
  </BtnHover>
</template>

<style lang="scss" scoped></style>

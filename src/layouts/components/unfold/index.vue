<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useLayoutStore } from '@/store/layout'

interface Props {
  iconSize?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: 20,
})

const { t } = useI18n()

const layoutStore = useLayoutStore()
</script>

<template>
  <cli-btn-hover
    showTooltip
    :tooltip="
      layoutStore.menuUnfoldStatus ? t('tooltip.unfold') : t('tooltip.fold')
    "
  >
    <template #content>
      <cli-svg-icon
        name="MenuUnfoldOutlined"
        v-if="!layoutStore.menuUnfoldStatus"
        @click="layoutStore.changeMenuUnfoldStatus"
      ></cli-svg-icon>
      <cli-svg-icon
        name="MenuFoldOutlined"
        v-else
        @click="layoutStore.changeMenuUnfoldStatus"
      ></cli-svg-icon>
    </template>
  </cli-btn-hover>
</template>

<style lang="scss" scoped></style>

<script lang="ts" setup>
import { useLayoutStore } from '@/store/layout'
import { APP_LAYOUT_MODE } from '@/common/config'
import LeftMenuLayout from './leftMenuLayout/index.vue'

const layoutStore = useLayoutStore()
</script>

<template>
  <LeftMenuLayout
    v-if="layoutStore.mode == 'leftMenu' || APP_LAYOUT_MODE == 'leftMenu'"
  ></LeftMenuLayout>
</template>

<style lang="scss" scoped>
@import '@/styles/scrollbar.scss';
</style>

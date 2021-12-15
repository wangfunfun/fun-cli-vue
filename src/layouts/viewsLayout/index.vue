<script lang="ts" setup>
/**
 * @name adminLayout-index
 * a component to set admin page layout
 */

import { useConfigStore } from '@/store/config'
import LeftMenuLayout from './leftMenuLayout/index.vue'

const configStore = useConfigStore()
</script>

<template>
  <LeftMenuLayout v-if="configStore.viewsLayout.mode == 'leftMenu'"></LeftMenuLayout>
</template>

<style lang="scss" scoped>
@import '@/assets/style/scrollbar.scss';
</style>

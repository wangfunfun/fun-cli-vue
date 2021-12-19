<script lang="ts" setup>
import { useConfigStore } from '@/store/config'
import LeftMenuLayout from './leftMenuLayout/index.vue'

const configStore = useConfigStore()
</script>

<template>
  <LeftMenuLayout v-if="configStore.viewsLayout.mode == 'leftMenu'"></LeftMenuLayout>
</template>

<style lang="scss" scoped>
@import '@/styles/scrollbar.scss';
</style>

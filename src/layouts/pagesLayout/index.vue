<script lang="ts" setup>
/**
 * @name adminLayout-index
 * a component to set admin page layout
 */

import { NLayout, NLayoutContent } from 'naive-ui'
</script>

<template>
  <n-layout>
    <n-layout-content>
      <router-view></router-view>
    </n-layout-content>
  </n-layout>
</template>

<style lang="scss" scoped>
@import '@/styles/scrollbar.scss';
</style>

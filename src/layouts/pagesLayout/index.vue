<script lang="ts" setup>
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

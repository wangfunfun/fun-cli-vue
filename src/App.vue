<script setup lang="ts">
import AppProvider from './AppProvider.vue'
</script>

<template>
  <AppProvider>
    <template #app>
      <router-view></router-view>
    </template>
  </AppProvider>
</template>

<style lang="scss">
@import '@/styles/index.scss';
</style>

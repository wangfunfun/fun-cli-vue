<script lang="ts" setup>
/**
 * @name pageLayout-index
 * individual page layout
 */

import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter } from 'naive-ui'
import Header from './header.vue'
import Footer from './footer.vue'
</script>

<template>
  <n-layout class="page-scrollbar">
    <n-layout-header>
      <Header></Header>
    </n-layout-header>
    <n-layout-content>
      <router-view></router-view>
    </n-layout-content>
    <n-layout-footer>
      <Footer></Footer>
    </n-layout-footer>
  </n-layout>
</template>

<style lang="scss" scoped>
@import '@/assets/style/scrollbar.scss';
:deep(.n-layout-scroll-container) {
  height: auto;
}
</style>

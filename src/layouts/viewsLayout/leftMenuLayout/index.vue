<script lang="ts" setup>
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NLayoutSider } from 'naive-ui'
import { useConfigStore } from '@/store/config'
import Header from './header.vue'
import Footer from './footer.vue'
import Sider from './sider.vue'
import Tags from './tags.vue'

const configStore = useConfigStore()
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider>
      <Sider></Sider>
    </n-layout-sider>
    <n-layout class="admin-scrollbar">
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
  </n-layout>
</template>

<style lang="scss" scoped>
@import '@/styles/scrollbar.scss';
</style>

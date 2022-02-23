<script lang="ts" setup>
import Header from './header.vue'
import Footer from './footer.vue'
import Sider from './sider.vue'
import { Tabs } from '@/layouts/components'

import { ref } from 'vue'

import { useLayoutStore } from '@/store/layout'

const layoutStore = useLayoutStore()

const siderBgColor = ref(layoutStore.layoutTheme.siderBgColor)
const mentTextColor = ref(layoutStore.layoutTheme.mentTextColor)
</script>

<template>
  <el-container>
    <el-aside
      class="slider-scrollbar"
      width="200px"
      :style="{
        '--thumb-color': mentTextColor,
        '--track-color': siderBgColor,
      }"
    >
      <Sider></Sider>
    </el-aside>
    <el-container>
      <el-header>
        <el-card class="shadow">
          <Header></Header>
          <Tabs></Tabs>
        </el-card>
      </el-header>
      <el-main class="admin-scrollbar">
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
@import '@/styles/scrollbar.scss';
:deep(.el-card__body) {
  padding: 0 !important;
}

.el-header {
  height: auto !important;
}
.el-aside {
  background-color: v-bind(siderBgColor);
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>

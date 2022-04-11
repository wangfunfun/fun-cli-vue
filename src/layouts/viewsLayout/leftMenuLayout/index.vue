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
        width: layoutStore.menuUnfoldStatus ? '200px' : '60px',
        transition: 'all 0.3s ease-in-out',
      }"
    >
      <Sider></Sider>
    </el-aside>
    <el-container>
      <el-header>
        <div class="shadow">
          <Header></Header>
          <Tabs></Tabs>
        </div>
      </el-header>
      <el-main
        class="admin-scrollbar"
        :style="{
          '--thumb-color': mentTextColor,
          '--track-color': siderBgColor,
        }"
      >
        <slot name="leftMenuLayout"></slot>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
@import '@/styles/scrollbar.scss';

.el-header {
  height: auto !important;
}
.el-aside {
  background-color: v-bind(siderBgColor);
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
.el-container {
  height: 100vh !important;
}

.el-footer {
  padding: 0 !important;
  margin: 0 !important;
  height: auto !important;
}
</style>

<script lang="ts" setup>
import Header from './header.vue'
import Footer from './footer.vue'
import Sider from './sider.vue'
import Tags from './tags.vue'

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
        <Header></Header>
        <Tags></Tags>
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

.el-aside {
  background-color: v-bind(siderBgColor);
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>

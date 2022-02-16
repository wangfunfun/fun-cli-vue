<script lang="ts" setup>
import Header from './header.vue'
import Footer from './footer.vue'
import Sider from './sider.vue'
import Tags from './tags.vue'
</script>

<template>
  <el-container>
    <el-aside width="200px">
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
</style>

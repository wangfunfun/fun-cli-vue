<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { MenuItem } from '../index'
import { useRouteStore } from '@/store/route'
import { useLayoutStore } from '@/store/layout'

const route = useRoute()

const routeStore = useRouteStore()

const layoutStore = useLayoutStore()
</script>

<template>
  <el-menu
    :collapse="!layoutStore.menuUnfoldStatus"
    :router="layoutStore.isVueRouter"
    :unique-opened="layoutStore.uniqueOpened"
    :default-active="route.path"
    :background-color="layoutStore.layoutTheme.siderBgColor"
    :text-color="layoutStore.layoutTheme.mentTextColor"
    :active-text-color="layoutStore.layoutTheme.mentActiveColor"
  >
    <MenuItem :data="routeStore.viewsRoutes"></MenuItem>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  border: none;
}
</style>

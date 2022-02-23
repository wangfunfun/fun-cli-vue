<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { MenuItem } from '../index'
import { useRouteStore } from '@/store/route'
import { useLayoutStore } from '@/store/layout'

const route = useRoute()

const routeStore = useRouteStore()

const layoutStore = useLayoutStore()

const nowRoute = ref(route.path)
</script>

<template>
  <el-menu
    :router="layoutStore.isVueRouter"
    :unique-opened="layoutStore.uniqueOpened"
    :default-active="nowRoute"
    :background-color="layoutStore.layoutTheme.siderBgColor"
    :text-color="layoutStore.layoutTheme.mentTextColor"
    :active-text-color="layoutStore.layoutTheme.mentActiveColor"
  >
    <MenuItem :data="routeStore.allViewsRoutes"></MenuItem>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  border: none;
}
</style>

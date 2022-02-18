<script lang="ts" setup>
import { MenuItem } from '../index'
import { useRouteStore } from '@/store/route'
import { useLayoutStore } from '@/store/layout'
import { ADMIN_FIRST_PAGE } from '@/common/admin'

const routeStore = useRouteStore()

const layoutStore = useLayoutStore()
</script>

<template>
  <el-menu
    :router="layoutStore.isVueRouter"
    :unique-opened="layoutStore.uniqueOpened"
    :default-active="ADMIN_FIRST_PAGE"
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

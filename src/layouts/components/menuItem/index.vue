<script lang="ts" setup>
import { RouteRecordRaw } from 'vue-router'
import { MenuItem } from '../index'

interface Props {
  data?: Array<RouteRecordRaw>
}

const Props = withDefaults(defineProps<Props>(), {
  data: Array,
})
</script>

<template>
  <template v-for="(route, index) in Props.data" :key="index">
    <el-sub-menu
      :index="route.path"
      v-if="route.children && route.children.length > 0"
    >
      <template #title>
        <svg-icon
          v-if="route.meta?.icon && route.meta?.iconType == 'custom'"
          :name="route.meta.icon"
        ></svg-icon>
        <el-icon v-if="route.meta?.icon && route.meta?.iconType == 'el'">
          {{ route.meta?.icon }}
        </el-icon>
        <span>{{ route.meta?.menuName }}</span>
      </template>
      <MenuItem :data="route.children"></MenuItem>
    </el-sub-menu>
    <el-menu-item :index="route.path" v-else>
      <template #title>
        <a
          v-if="route.meta?.isNewPage"
          target="_blank"
          :href="`${route.meta?.pageUrl}`"
          >{{ route.meta?.menuName }}</a
        >
        <span v-else>{{ route.meta?.menuName }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

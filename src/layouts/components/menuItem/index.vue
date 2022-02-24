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
          v-if="route.meta?.icon && route.meta?.iconType == 'cli'"
          :name="route.meta.icon"
        ></svg-icon>
        <el-icon v-if="route.meta?.icon && route.meta?.iconType == 'el'">
          <component :is="route.meta?.icon"></component>
        </el-icon>
        <span class="menuLabel line-omitted-1">{{ route.meta?.menuName }}</span>
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
        <template v-else>
          <svg-icon
            v-if="route.meta?.icon && route.meta?.iconType == 'cli'"
            :name="route.meta.icon"
          ></svg-icon>
          <el-icon v-if="route.meta?.icon && route.meta?.iconType == 'el'">
            <component :is="route.meta?.icon"></component>
          </el-icon>
          <span class="menuLabel line-omitted-1">{{
            route.meta?.menuName
          }}</span>
        </template>
      </template>
    </el-menu-item>
  </template>
</template>

<style lang="scss" scoped>
.menuLabel {
  padding-left: 8px;
  width: 100%;
  display: inline-block;
}
</style>

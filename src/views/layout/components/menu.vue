<template>
  <!-- 第一层 -->
  <template v-for="item in menu">
    <el-menu-item
      :index="parentPath + item.path"
      v-if="!item.children || item.children.length == 0"
      :key="parentPath + item.path"
    >
      <i :class="item.meta.icon"></i>
      <template #title>{{ item.meta.menuName }}</template>
    </el-menu-item>
    <el-submenu
      :index="parentPath + item.path"
      v-if="item.children && item.children.length > 0"
      :key="parentPath + item.path"
    >
      <template #title>
        <i :class="item.meta.icon"></i>
        <span>{{ item.meta.menuName }}</span>
      </template>
      <!-- 第二层 -->
      <template v-for="sub in item.children">
        <el-menu-item
          :index="parentPath + item.path + '/' + sub.path"
          v-if="!sub.subMenu || sub.subMenu.length == 0"
          :key="parentPath + item.path + '/' + sub.path"
        >
          <i :class="sub.meta.icon"></i>
          <template #title>{{ sub.meta.menuName }}</template>
        </el-menu-item>
        <el-submenu
          :index="parentPath + item.path + '/' + sub.path"
          :key="parentPath + item.path + '/' + sub.path"
          v-if="sub.subMenu && sub.subMenu.length > 0"
        >
          <template #title>
            <i :class="sub.meta.icon"></i>
            <span>{{ sub.meta.menuName }}</span>
          </template>
          <!-- 第三层 -->
          <Menu
            :menu="sub.subMenu"
            :parentPath="parentPath + '/' + item.path + '/' + sub.path + '/'"
          ></Menu>
        </el-submenu>
      </template>
    </el-submenu>
  </template>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Menu',
  props: {
    menu: {
      type: Array,
      default: () => {
        return []
      }
    },
    parentPath: {
      type: String,
      default: ''
    }
  }
})
</script>

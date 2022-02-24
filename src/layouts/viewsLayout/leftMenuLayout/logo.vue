<script lang="ts" setup>
import { APP_NAME } from '@/common/constant'
import { useLayoutStore } from '@/store/layout'

const layoutStore = useLayoutStore()
</script>

<template>
  <div class="logo flex-center">
    <div class="name line-omitted-1" v-if="layoutStore.menuUnfoldStatus">{{ APP_NAME }}</div>
    <SvgIcon name="Logo" v-else width="30px" height="30px"></SvgIcon>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  padding: 20px 0;
}
.name {
  font-size: $font-size-lg;
  font-weight: bold;
  color: #fff;
  width: 100%;
  text-align: center;
}
</style>

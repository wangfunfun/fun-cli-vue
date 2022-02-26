<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { useRouteStore } from '@/store/route'
import { useLayoutStore } from '@/store/layout'
import { ADMIN_LAYOUT_MODE } from '@/common/admin'
import LeftMenuLayout from './leftMenuLayout/index.vue'

const layoutStore = useLayoutStore()

const routeStore = useRouteStore()

onBeforeMount(async () => {
  await routeStore.getAsyncViewsRoutes()
})
</script>

<template>
  <LeftMenuLayout
    v-if="layoutStore.mode == 'leftMenu' || ADMIN_LAYOUT_MODE == 'leftMenu'"
  >
    <template #leftMenuLayout>
      <div class="view-container">
        <slot name="viewsLayout"></slot>
      </div>
    </template>
  </LeftMenuLayout>
</template>

<style lang="scss" scoped>
@import '@/styles/scrollbar.scss';

.view-container {
  width: calc(100% - 40px);
  min-height: calc(100% - 40px);
  padding: 20px;
  background-color: $bg-color;
}
</style>

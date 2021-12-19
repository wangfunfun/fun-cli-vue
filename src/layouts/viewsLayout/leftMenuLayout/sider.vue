<script lang="ts" setup>
import { reactive, computed, onMounted, ref } from 'vue'
import { useRouteStore } from '@/store/route'

const routeStore: any = useRouteStore()

const config = reactive({
  viewsRoutes: computed(() => routeStore.viewsRoutes)
})

const activeMenuPath = ref('/admin/dashboard/workbench')

onMounted(() => {})
</script>

<template>
  <n-menu
    :options="config.viewsRoutes"
    v-model:value="activeMenuPath"
    key-field="path"
    label-field="menuName"
    children-field="children"
  />
</template>

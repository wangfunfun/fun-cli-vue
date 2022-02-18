<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus'
import { useLanguageHook } from '@/hooks/language'
import { useConfigStore } from '@/store/config'
import { useRouteStore } from '@/store/route'
import { onBeforeMount } from 'vue'
import { pagesRoutes, viewsRoutes, allRoutes } from '@/router/config'

const configStore = useConfigStore()

const routeStore = useRouteStore()

const language = useLanguageHook()

onBeforeMount(() => {
  routeStore.setPagesRoutes(pagesRoutes)
  routeStore.setViewsRoutes(viewsRoutes)
  routeStore.setAllRoutes(allRoutes)
})
</script>

<template>
  <el-config-provider
    :zIndex="configStore.elementPlusConfig.zIndex"
    :locale="language.messages.value[configStore.language].el"
  >
    <slot name="app"></slot>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus'
import { useLanguageHook } from '@/hooks/language'
import { useConfigStore } from '@/store/config'
import { useRouteStore } from '@/store/route'
import { useRoute } from 'vue-router'
import { onBeforeMount } from 'vue'
import { pagesRoutes, viewsRoutes, allRoutes } from '@/router/config'
import ViewsLayout from '@/layouts/viewsLayout/index.vue'
import PagesLayout from '@/layouts/pagesLayout/index.vue'

const configStore = useConfigStore()

const routeStore = useRouteStore()
const route = useRoute()

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
    <ViewsLayout v-if="route.meta?.layout === 'views'">
      <template #viewsLayout>
        <slot name="app"></slot>
      </template>
    </ViewsLayout>
    <PagesLayout v-if="route.meta?.layout === 'pages'">
      <template #pagesLayout>
        <slot name="app"></slot>
      </template>
    </PagesLayout>
  </el-config-provider>
</template>

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
import GeneralCache from '@/utils/general-cache'
import { APP_DEFAULT_LANGUAGE } from '@/common/config'
import GlobalLoading from '@/components/global-loading'

const configStore = useConfigStore()

const routeStore = useRouteStore()
const route = useRoute()

const languageAlias: any = new GeneralCache('languageAlias', 'local').get()
const language = useLanguageHook()

onBeforeMount(() => {
  routeStore.setPagesRoutes(pagesRoutes)
  routeStore.setViewsRoutes(viewsRoutes)
  routeStore.setAllRoutes(allRoutes)
  language.changeLanguage(languageAlias || APP_DEFAULT_LANGUAGE)
})
</script>

<template>
  <el-config-provider
    :zIndex="configStore.elementPlusConfig.zIndex"
    :locale="language.messages.value[configStore.language].el"
  >
    <GlobalLoading v-if="configStore.initStatus === 0"></GlobalLoading>
    <template v-else>
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
    </template>
  </el-config-provider>
</template>

<style lang="scss" scoped></style>

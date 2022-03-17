<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus'
import { useLanguageHook } from '@/hooks/language'
import { useInitHook } from '@/hooks/init'
import { useConfigStore } from '@/store/config'
import { useRoute } from 'vue-router'
import { onBeforeMount } from 'vue'
import ViewsLayout from '@/layouts/viewsLayout/index.vue'
import PagesLayout from '@/layouts/pagesLayout/index.vue'
import GlobalLoading from '@/components/global-loading'

const configStore = useConfigStore()

const initHook = useInitHook()

const route = useRoute()

const language = useLanguageHook()

onBeforeMount(() => {
  if (route.meta?.layout === 'pages') {
    initHook.initPagesLayout()
  } else if (route.meta?.layout === 'views') {
    initHook.initViewsLayout()
  }
})
</script>

<template>
  <el-config-provider
    :zIndex="configStore.elementPlusConfig.zIndex"
    :locale="language.messages.value[configStore.language].el"
  >
    <GlobalLoading v-if="configStore.globalLoading"></GlobalLoading>
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

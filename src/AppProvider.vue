<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus'
import { useLanguageHook } from '@/hooks/language'
import { useInitHook } from '@/hooks/init'
import { useConfigStore } from '@/store/config'
import { onBeforeMount } from 'vue'
import Layout from '@/layouts/index.vue'
import CliGlobalLoading from '@/components/cli-global-loading'

const configStore = useConfigStore()

const initHook = useInitHook()

const language = useLanguageHook()

onBeforeMount(async () => {
  initHook.initLayout()
})
</script>

<template>
  <el-config-provider
    :zIndex="configStore.elementPlusConfig.zIndex"
    :locale="language.messages.value[configStore.language].el"
  >
    <cli-global-loading v-if="configStore.globalLoading"></cli-global-loading>
    <template v-else>
      <Layout>
        <template #layout>
          <slot name="app"></slot>
        </template>
      </Layout>
    </template>
  </el-config-provider>
</template>

<style lang="scss" scoped></style>

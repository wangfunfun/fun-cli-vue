<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Error401, Error403, Error404, Error500, Error503 } from './components/'
const { t } = useI18n()

const route = useRoute()

const currentCode = ref<string | string[]>('404')

const router = useRouter()

const goPrePage = (): void => {
  router.go(-1)
}

const goIndexPage = (): void => {
  router.replace({ name: 'Index' })
}

onBeforeMount(() => {
  currentCode.value = route.params.currentCode || '404'
})
</script>

<template>
  <div class="page">
    <div class="component">
      <Error401 v-if="currentCode === '401'"></Error401>
      <Error403 v-if="currentCode === '403'"></Error403>
      <Error404 v-if="currentCode === '404'"></Error404>
      <Error500 v-if="currentCode === '500'"></Error500>
      <Error503 v-if="currentCode === '503'"></Error503>
      <div class="operate flex-center">
        <el-button
          type="text"
          style="margin-right: 40px"
          @click="goPrePage()"
          >{{ t('error.goPrePage') }}</el-button
        >
        <el-button
          type="primary"
          style="min-width: 120px"
          @click="goIndexPage()"
          >{{ t('error.goHome') }}</el-button
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  position: relative;
  height: 100vh;
  overflow: hidden;
  color: #409eff;
}

.component {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
:deep(.slot) {
  align-items: flex-end;
}
:deep(.code) {
  font-size: 100px;
  font-weight: bolder;
  line-height: 100px;
}

:deep(.info) {
  font-size: 40px;
  padding-left: 20px;
}

.operate {
  margin-top: 100px;
}
</style>

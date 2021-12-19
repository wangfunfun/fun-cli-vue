<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { NButton } from 'naive-ui'
import { Code401, Code403, Code404, Code500, Code503 } from '@/components/code'
import { Wave } from '@/components/animation'

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
    <Code401 v-if="currentCode === '401'"></Code401>
    <Code403 v-if="currentCode === '403'"></Code403>
    <Code404 v-if="currentCode === '404'"></Code404>
    <Code500 v-if="currentCode === '500'"></Code500>
    <Code503 v-if="currentCode === '503'"></Code503>
    <div class="operate flex-center">
      <n-button text type="primary" style="margin-right: 40px" @click="goPrePage()">{{
        t('btn.goPrePage')
      }}</n-button>
      <n-button round type="primary" style="min-width: 120px" @click="goIndexPage()">{{
        t('btn.goHome')
      }}</n-button>
    </div>
    <div class="wave">
      <Wave></Wave>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

:deep(.slot) {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
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
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%);
}

.wave {
  position: absolute;
  bottom: -100px;
  left: 0;
  width: 100%;
}
</style>

<script lang="ts" setup>
import { NButton, NSpace, NCard } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { APP_VERSION, APP_NAME } from '@/common/constant'
import { Language, Theme } from '@/components/layouts'
import { Hover } from '@/components/animation'

const { t } = useI18n()

const router = useRouter()

const goWebsite = (url: string): void => {
  window.open(url)
}

const goRoute = (path: string): void => {
  router.push({ path })
}

const checkVersion = () => {}
</script>

<template>
  <n-card class="shadow fixed" content-style="padding: 14px 40px;">
    <div class="flex-between">
      <n-space>
        <div class="logo" @click="goRoute('/home/welcome')">
          <img src="@/assets/image/logo.png" alt="" />
          <span>
            {{ APP_NAME }}
          </span>
        </div>
      </n-space>
      <n-space class="flex-start">
        <Hover>
          <template #content>
            <n-button text @click="goWebsite('https://github.com/wangqf19/fage-cli')">
              {{ t('btn.github') }}
            </n-button>
          </template>
        </Hover>
        <Language></Language>
        <Theme></Theme>
        <Hover>
          <template #content>
            <n-button text @click="checkVersion()">
              {{ t('info.version') + APP_VERSION }}
            </n-button>
          </template>
        </Hover>
      </n-space>
    </div>
  </n-card>
</template>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.logo {
  cursor: pointer;
  padding-right: 40px;
  img {
    width: 40px;
    vertical-align: middle;
    margin-right: 8px;
  }
  span {
    vertical-align: middle;
    font-size: $font-size-lg;
  }
}
</style>

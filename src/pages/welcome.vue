<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { APP_NAME } from '@/common/constant'
import { NButton } from 'naive-ui'
import { useLanguageHook } from '@/hooks/language'
import { useThemeHook } from '@/hooks/theme'
import { useRouter } from 'vue-router'

const { t } = useI18n()

const language = useLanguageHook()

const theme = useThemeHook()

const router = useRouter()

const goPage = (route: string) => {
  router.push({ path: route })
}
</script>

<template>
  <div class="page">
    <div class="welcome">
      <div class="logo">
        <img src="../assets/images/logo.png" />
      </div>
      <div class="title">{{ APP_NAME }}</div>
      <div class="desc">{{ t('welcome.description') }}</div>
      <div class="link flex-between">
        <n-button text type="info" @click="goPage('/login')">{{
          t('btn.pages')
        }}</n-button>
        |
        <n-button
          text
          type="info"
          @click="goPage('/admin/dashboard/workbench')"
          >{{ t('btn.admin') }}</n-button
        >
        |
        <n-button text type="info" @click="goPage('')">{{
          t('btn.github')
        }}</n-button>
        <!-- <n-button text type="info" @click="theme.setTheme()">{{
          theme.nowTheme ? t('btn.darkTheme') : t('btn.lightTheme')
        }}</n-button>
        |
        <n-button
          text
          type="info"
          @click="
            language.selectLanguage(
              language.nowLanguage === 'enUS' ? 'zhCN' : 'enUS'
            )
          "
          >{{ language.nowLanguage }}</n-button
        > -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.welcome {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
}

.logo {
  width: 120px;
  height: auto;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
  }
}

.title {
  font-size: $font-size-xxl;
  font-weight: bolder;
  margin: 20px 0 20px 0;
  text-align: center;
}
.link {
  padding: 40px;
  text-align: center;
}
</style>

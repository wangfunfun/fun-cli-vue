<script lang="ts" setup>
import { NButton } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { APP_VERSION } from '@/common/constant'

const { t } = useI18n()

const goWebsite = (url: string): void => {
  window.open(url)
}
</script>
<template>
  <div class="slot">
    <div class="inner flex-center">
      <div class="list flex-start flex-wrap">
        <div class="title">{{ t('info.technology') }}</div>
        <div class="link">
          <n-button text @click="goWebsite('https://v3.cn.vuejs.org/')">Vue 3.2</n-button>
        </div>
        <div class="link">
          <n-button text @click="goWebsite('https://vitejs.cn/')">Vite 2</n-button>
        </div>
        <div class="link">
          <n-button text @click="goWebsite('https://www.naiveui.com')">Naive UI</n-button>
        </div>
        <div class="link">
          <n-button text @click="goWebsite('https://www.typescriptlang.org/')">TypeScript</n-button>
        </div>
      </div>
      <div class="list flex-start flex-wrap">
        <div class="title">{{ t('info.dependencies') }}</div>
        <div class="link">
          <n-button text @click="goWebsite('https://pinia.vuejs.org/')">Pinia</n-button>
        </div>
        <div class="link">
          <n-button text @click="goWebsite('https://next.router.vuejs.org/')">Vue-router</n-button>
        </div>
        <div class="link">
          <n-button text @click="goWebsite('https://axios-http.com/')">Axios</n-button>
        </div>
        <div class="link">
          <n-button
            text
            @click="goWebsite('https://kazupon.github.io/vue-i18n/zh/introduction.html')"
            >Vue-i18n</n-button
          >
        </div>
      </div>
      <div class="list flex-start flex-wrap">
        <div class="title">{{ t('info.code') }}</div>
        <div class="link">
          <n-button text @click="goWebsite('https://jestjs.io/')">Jest</n-button>
        </div>
        <div class="link">
          <n-button text @click="goWebsite('https://eslint.org/')">Eslint</n-button>
        </div>
        <div class="link">
          <n-button text @click="goWebsite('https://prettier.io/')">Prettier</n-button>
        </div>
        <div class="link">
          <n-button text @click="goWebsite('http://editorconfig.org')">Editor</n-button>
        </div>
      </div>
      <div class="list flex-start flex-wrap">
        <div class="title">{{ t('info.more') }}</div>
        <div class="link">
          <n-button text>
            <a style="color: var(--primary-color)" href="mailto:wangqf19@189.cn">
              {{ t('btn.contactUs') }}
            </a>
          </n-button>
        </div>
        <div class="link">
          <n-button text @click="goWebsite('https://github.com/wangqf19/fage-cli/issues')">{{
            t('btn.reportBug')
          }}</n-button>
        </div>
        <div class="link">
          <n-button text @click="goWebsite('https://github.com/wangqf19/fage-cli')">
            {{ t('btn.github') }}
          </n-button>
        </div>
      </div>
    </div>
    <div class="version">
      <span>fage-cli</span>
      <span>·</span>
      <span>{{ APP_VERSION }}</span>
      <span>|</span>
      <span>{{ t('info.editor') }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slot {
  .inner {
    width: $container-width;
    margin: 0 auto;
    padding: 70px 0;
    align-items: flex-start;
    .list {
      margin: 0 60px;
    }
    .title {
      width: 100%;
      font-size: $font-size-md;
      font-weight: 600;
      padding-bottom: 10px;
    }
    .link {
      width: 100%;
      padding-bottom: 10px;
    }
  }
  .version {
    width: $container-width;
    margin: 0 auto;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 30px;
    border-top: 1px solid #ddd;
    span {
      margin-right: 10px;
    }
  }
}
</style>

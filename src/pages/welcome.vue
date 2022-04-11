<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { APP_NAME } from '@/common/constant'
import { useRouter } from 'vue-router'
import { ADMIN_FIRST_PAGE } from '@/common/admin'

const { t } = useI18n()

const router = useRouter()

const goRoutes = (route: string) => {
  router.push({ path: route })
}

const goWebsite = (url: string) => {
  window.open(url)
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
        <el-button
          type="text"
          @click="goWebsite('https://element-plus.org/')"
          >{{ t('welcome.elementPlus') }}</el-button
        >
        |
        <el-button type="text" @click="goRoutes(ADMIN_FIRST_PAGE)">{{
          t('welcome.toAdmin')
        }}</el-button>
        |
        <el-button
          type="text"
          @click="goWebsite('https://github.com/wangqf19/cli-vue3-vite2-ts')"
          >{{ t('btn.github') }}</el-button
        >
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
  width: 506px;
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

.el-button + .el-button {
  margin: 0 !important;
}
</style>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { GENERAL_CACHE_ALIAS } from '@/common/constant'
import { Wave } from '@/components/animation'
import { Logo } from '@/components/common/'
import { LoginForm, ResetPasswordForm, SignupForm } from '@/components/login'

const { t } = useI18n()

const route = useRoute()

const currentComponent = ref<string | string[]>('login')

const changeComponent = (e: string) => {
  currentComponent.value = e
}

onBeforeMount(() => {
  currentComponent.value = route.params.currentComponent || 'login'
})
</script>

<template>
  <div class="page flex-between not-select">
    <div class="left bgColor">
      <div class="info">
        <Logo></Logo>
        <div class="name">{{ GENERAL_CACHE_ALIAS }}</div>
        <div class="slogan">{{ t('info.slogan') }}</div>
      </div>
      <div class="wave">
        <Wave></Wave>
      </div>
    </div>
    <div class="right">
      <LoginForm v-if="currentComponent === 'login'" @changeComponent="changeComponent"></LoginForm>
      <ResetPasswordForm
        v-if="currentComponent === 'resetPassword'"
        @changeComponent="changeComponent"
      ></ResetPasswordForm>
      <SignupForm
        v-if="currentComponent === 'signup'"
        @changeComponent="changeComponent"
      ></SignupForm>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bgColor {
  background-color: #18a058;
}

.left {
  width: 55%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .info {
    padding-top: 20vh;

    .name {
      color: #fff;
      font-size: $font-size-max;
      font-weight: bold;
      text-align: center;
      width: 100%;
      padding-top: 10vh;
    }

    .slogan {
      color: #eee;
      font-size: $font-size-xl;
      text-align: center;
      width: 100%;
      padding-top: 20px;
    }
  }

  .wave {
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
  }
}
.right {
  width: 40%;
  height: 100%;
}
</style>

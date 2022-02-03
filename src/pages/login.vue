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
  <div class="page flex-center not-select">
    <div class="inner">
      <LoginForm
        v-if="currentComponent === 'login'"
        @changeComponent="changeComponent"
      ></LoginForm>
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
.inner {
  background-color: #fff;
  box-shadow: $box-shadow-base;
  padding: 100px 60px;
  width: 30%;
}
</style>

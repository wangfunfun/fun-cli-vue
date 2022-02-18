<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { LoginForm, ResetPasswordForm, SignupForm } from './components/'

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
  <div class="page flex-center not-select bg">
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
  padding: 50px;
  width: 400px;
}

@keyframes HUE_SHIFT {
  0% {
    filter: hue-rotate(0);
  }

  100% {
    filter: hue-rotate(360deg);
  }
}

.bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  animation: HUE_SHIFT 5s infinite;
  background: linear-gradient(-30deg, #fef280, #ff7496, #ff59f8);
}
</style>

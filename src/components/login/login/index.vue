<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { NForm, NInput, NFormItem, NButton } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import GeneralCache from '@/utils/general-cache'

const { t } = useI18n()

const emit = defineEmits(['changeComponent'])

const resetPassword = () => {
  emit('changeComponent', 'resetPassword')
}

const signup = () => {
  emit('changeComponent', 'signup')
}

interface FormState {
  email: string
  password: string
}

const loginForm = reactive<FormState>({
  email: '',
  password: ''
})

const loginRules = ref({
  email: {
    required: true,
    message: t('rules.email'),
    trigger: ['input']
  },
  password: {
    required: true,
    message: t('rules.password'),
    trigger: ['input']
  }
})

const router = useRouter()

const loginSubmit = () => {
  new GeneralCache('token', 'session').set('vistor')
  router.push({ name: 'AdminDashboardWorkbench', params: { roleFlag: 'visitor' } })
}
</script>

<template>
  <div class="slot">
    <div class="title">{{ t('info.login') }}</div>
    <n-form :label-width="80" :model="loginForm" :rules="loginRules" size="large" ref="formRef">
      <n-form-item path="email">
        <n-input v-model:value="loginForm.email" :placeholder="t('placeholder.email')" />
      </n-form-item>
      <n-form-item path="password">
        <n-input v-model:value="loginForm.password" :placeholder="t('placeholder.password')" />
      </n-form-item>
      <n-form-item>
        <n-button size="large" @click="loginSubmit" type="primary" style="width: 100%">{{
          t('btn.login')
        }}</n-button>
      </n-form-item>
    </n-form>
    <div class="flex-between operate">
      <n-button size="large" @click="resetPassword" text color="rgb(118, 124, 130)">{{
        t('btn.resetPassword')
      }}</n-button>
      <n-button size="large" @click="signup" text type="primary">{{ t('btn.signup') }}</n-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slot {
  width: 70%;
  margin: 0 auto;
  padding-right: 80px;
}

.title {
  font-size: $font-size-xxl;
  font-weight: 600;
  padding-bottom: 50px;
}

.operate {
  padding-top: 60px;
}
</style>

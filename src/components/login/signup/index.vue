<script lang="ts" setup>
/**
 * @name sign-up
 * component to login page
 */

import { ref, reactive } from 'vue'
import { NForm, NInput, NFormItem, NButton } from 'naive-ui'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const emit = defineEmits(['changeComponent'])

const backLogin = () => {
  emit('changeComponent', 'login')
}

interface FormState {
  email: string
  password: string
  confirmPassword: string
}

const signupForm = reactive<FormState>({
  email: '',
  password: '',
  confirmPassword: ''
})

const signupRules = ref({
  email: {
    required: true,
    message: t('rules.email'),
    trigger: ['input']
  },
  password: {
    required: true,
    message: t('rules.password'),
    trigger: ['input']
  },
  confirmPassword: {
    required: true,
    message: t('rules.confirmPassword'),
    trigger: ['input']
  }
})

const signupSubmit = () => {}
</script>

<template>
  <div class="slot">
    <div class="title">
      {{ t('info.signup') }}
    </div>
    <n-form :label-width="80" :model="signupForm" :rules="signupRules" size="large" ref="formRef">
      <n-form-item path="email">
        <n-input v-model:value="signupForm.email" :placeholder="t('placeholder.email')" />
      </n-form-item>
      <n-form-item path="password">
        <n-input v-model:value="signupForm.password" :placeholder="t('placeholder.password')" />
      </n-form-item>
      <n-form-item path="confirmPassword">
        <n-input
          v-model:value="signupForm.confirmPassword"
          :placeholder="t('placeholder.confirmPassword')"
        />
      </n-form-item>
      <n-form-item>
        <n-button size="large" @click="signupSubmit" type="primary" style="width: 100%">{{
          t('btn.signup')
        }}</n-button>
      </n-form-item>
    </n-form>
    <div class="flex-start operate">
      <span style="padding-right: 10px">{{ t('btn.existingAccount') }}</span>
      <n-button size="large" @click="backLogin" text type="primary">{{
        t('btn.backLogin')
      }}</n-button>
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

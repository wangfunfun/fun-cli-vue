<script lang="ts" setup>
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
  emailCode: string
  password: string
  confirmPassword: string
}

const registerForm = reactive<FormState>({
  email: '',
  emailCode: '',
  password: '',
  confirmPassword: ''
})

const registerRules = ref({
  email: {
    required: true,
    message: t('rules.email'),
    trigger: ['input']
  },
  emailCode: {
    required: true,
    message: t('rules.emailCode'),
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

const sendEmailCode = () => {}

const resetPasswordSubmit = () => {}
</script>

<template>
  <div class="slot">
    <div class="title">{{ t('info.resetPassword') }}</div>
    <n-form
      :label-width="80"
      :model="registerForm"
      :rules="registerRules"
      size="large"
      ref="formRef"
    >
      <n-form-item path="email">
        <n-input v-model:value="registerForm.email" :placeholder="t('placeholder.email')" />
      </n-form-item>
      <n-form-item path="emailCode">
        <n-input v-model:value="registerForm.emailCode" :placeholder="t('placeholder.emailCode')" />
        <n-button
          size="large"
          @click="sendEmailCode"
          type="primary"
          style="width: 200px; margin-left: 20px"
          >{{ t('btn.sendEmailCode') }}</n-button
        >
      </n-form-item>
      <n-form-item path="password">
        <n-input v-model:value="registerForm.password" :placeholder="t('placeholder.password')" />
      </n-form-item>
      <n-form-item path="confirmPassword">
        <n-input
          v-model:value="registerForm.confirmPassword"
          :placeholder="t('placeholder.confirmPassword')"
        />
      </n-form-item>
      <n-form-item>
        <n-button size="large" @click="resetPasswordSubmit" type="primary" style="width: 100%">{{
          t('btn.resetPasswordSubmit')
        }}</n-button>
      </n-form-item>
    </n-form>
    <div class="flex-start operate">
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

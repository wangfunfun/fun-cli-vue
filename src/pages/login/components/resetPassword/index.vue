<script lang="ts" setup>
import { ref, reactive } from 'vue'
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
  confirmPassword: '',
})

const registerRules = ref({
  email: [
    {
      required: true,
      message: t('login.placeholder.email'),
      trigger: 'blur',
    },
  ],
  emailCode: [
    {
      required: true,
      message: t('login.placeholder.emailCode'),
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: t('login.placeholder.password'),
      trigger: 'blur',
    },
  ],
  confirmPassword: [
    {
      required: true,
      message: t('login.placeholder.confirmPassword'),
      trigger: 'blur',
    },
  ],
})

const sendEmailCode = () => {}

const resetPasswordSubmit = () => {}
</script>

<template>
  <div class="slot">
    <div class="title">{{ t('login.info.resetPassword') }}</div>
    <el-form
      :model="registerForm"
      :rules="registerRules"
      size="large"
      ref="formRef"
    >
      <el-form-item prop="email">
        <el-input
          v-model="registerForm.email"
          :placeholder="t('login.placeholder.email')"
        />
      </el-form-item>
      <el-form-item prop="emailCode">
        <el-input
          style="width: 60%"
          v-model="registerForm.emailCode"
          :placeholder="t('login.placeholder.emailCode')"
        />
        <el-button
          size="large"
          type="primary"
          @click="sendEmailCode"
          style="width: 35%; margin-left: 5%"
          >{{ t('login.sendEmailCode') }}</el-button
        >
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="registerForm.password"
          :placeholder="t('login.placeholder.password')"
        />
      </el-form-item>
      <el-form-item prop="confirmPassword">
        <el-input
          v-model="registerForm.confirmPassword"
          :placeholder="t('login.placeholder.confirmPassword')"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          @click="resetPasswordSubmit"
          type="primary"
          style="width: 100%"
          >{{ t('login.resetPasswordSubmit') }}</el-button
        >
      </el-form-item>
    </el-form>
    <div class="flex-start operate">
      <el-button size="large" @click="backLogin" type="text">{{
        t('login.backLogin')
      }}</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slot {
}

.title {
  font-size: $font-size-xxl;
  font-weight: 600;
  padding-bottom: 50px;
}

.operate {
  padding-top: 25px;
}
</style>

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
  password: string
  confirmPassword: string
}

const signupForm = reactive<FormState>({
  email: '',
  password: '',
  confirmPassword: '',
})

const signupRules = ref({
  email: [
    {
      required: true,
      message: t('login.placeholder.email'),
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

const signupSubmit = () => {}
</script>

<template>
  <div class="slot">
    <div class="title">
      {{ t('login.info.signup') }}
    </div>
    <el-form
      :model="signupForm"
      :rules="signupRules"
      size="large"
      ref="formRef"
    >
      <el-form-item prop="email">
        <el-input
          v-model="signupForm.email"
          :placeholder="t('login.placeholder.email')"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="signupForm.password"
          :placeholder="t('login.placeholder.password')"
        />
      </el-form-item>
      <el-form-item prop="confirmPassword">
        <el-input
          v-model="signupForm.confirmPassword"
          :placeholder="t('login.placeholder.confirmPassword')"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          size="large"
          @click="signupSubmit"
          type="primary"
          style="width: 100%"
          >{{ t('login.signup') }}</el-button
        >
      </el-form-item>
    </el-form>
    <div class="flex-start operate">
      <span style="padding-right: 10px">{{ t('login.existingAccount') }}</span>
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

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const emit = defineEmits(['changeComponent'])

const backLogin = () => {
  emit('changeComponent', 'login')
}

interface FormState {
  userName: number | null
  smsCode: number | null
  password: string
  confirmPassword: string
}

const signupForm = reactive<FormState>({
  userName: null,
  smsCode: null,
  password: '',
  confirmPassword: '',
})

const signupRules = ref({
  userName: [
    {
      required: true,
      message: t('crud.rule.enter', { label: t('label.userName') }),
      trigger: 'blur',
    },
  ],
  smsCode: [
    {
      required: true,
      message: t('crud.rule.enter', { label: t('label.smsCode') }),
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: t('crud.rule.enter', { label: t('label.password') }),
      trigger: 'blur',
    },
  ],
  confirmPassword: [
    {
      required: true,
      message: t('crud.rule.enterAgain', { label: t('label.password') }),
      trigger: 'blur',
    },
  ],
})

const sendEmailCode = () => {}

const signupSubmit = () => {}
</script>

<template>
  <div class="slot">
    <div class="title">
      {{ t('login.info.signup') }}
    </div>
    <el-form :model="signupForm" :rules="signupRules" ref="formRef">
      <el-form-item prop="userName">
        <el-input
          v-model="signupForm.userName"
          :placeholder="
            t('crud.placeholder.enter', { label: t('label.userName') })
          "
        />
      </el-form-item>
      <el-form-item prop="smsCode">
        <el-input
          style="width: 60%"
          v-model="signupForm.smsCode"
          :placeholder="
            t('crud.placeholder.enter', { label: t('label.smsCode') })
          "
        />
        <el-button
          type="primary"
          @click="sendEmailCode"
          style="width: 35%; margin-left: 5%"
          >{{ t('login.sendEmailCode') }}</el-button
        >
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="signupForm.password"
          :placeholder="
            t('crud.placeholder.enter', { label: t('label.password') })
          "
        />
      </el-form-item>
      <el-form-item prop="confirmPassword">
        <el-input
          v-model="signupForm.confirmPassword"
          :placeholder="
            t('crud.placeholder.enterAgain', { label: t('label.password') })
          "
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="signupSubmit" type="primary" style="width: 100%">{{
          t('login.signup')
        }}</el-button>
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

<style lang="scss" scoped></style>

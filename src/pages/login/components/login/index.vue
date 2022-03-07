<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import GeneralCache from '@/utils/general-cache'
import { useLanguageHook, i18nConfig } from '@/hooks/language'
import { ADMIN_FIRST_PAGE } from '@/common/admin'
import Captcha from '@/components/captcha'

const { t } = useI18n()

const language = useLanguageHook()

const languageName = ref(language.languageName)

const emit = defineEmits(['changeComponent'])

const resetPassword = () => {
  emit('changeComponent', 'resetPassword')
}

const signup = () => {
  emit('changeComponent', 'signup')
}

interface FormState {
  userName: number | null
  password: string
  captcha: string
}

const loginForm = reactive<FormState>({
  userName: null,
  password: '',
  captcha: '',
})

const loginRules = ref({
  userName: [
    {
      required: true,
      message: t('crud.rule.enter', { label: t('label.userName') }),
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
  captcha: [
    {
      required: true,
      message: t('crud.rule.enter', { label: t('label.captcha') }),
      trigger: 'blur',
    },
  ],
})

const router = useRouter()

const loginSubmit = () => {
  new GeneralCache('token', 'session').set('vistor')
  router.push({
    path: ADMIN_FIRST_PAGE,
  })
}
</script>

<template>
  <div class="slot">
    <div class="title">{{ t('login.info.login') }}</div>
    <el-form :model="loginForm" :rules="loginRules" ref="formRef">
      <el-form-item>
        <el-select
          style="width: 100%"
          v-model="languageName"
          @change="language.changeLanguage"
        >
          <el-option
            v-for="(value, key) in i18nConfig"
            :key="key"
            :label="value"
            :value="key"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="userName">
        <el-input
          v-model="loginForm.userName"
          :placeholder="
            t('crud.placeholder.enter', { label: t('label.userName') })
          "
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          :placeholder="
            t('crud.placeholder.enter', { label: t('label.password') })
          "
        />
      </el-form-item>
      <el-form-item prop="captcha" class="flex-item-center">
        <el-input
          style="width: 60%"
          v-model="loginForm.captcha"
          :placeholder="
            t('crud.placeholder.enter', { label: t('label.captcha') })
          "
        />
        <Captcha></Captcha>
      </el-form-item>
      <el-form-item>
        <el-button @click="loginSubmit" type="primary" style="width: 100%">{{
          t('login.login')
        }}</el-button>
      </el-form-item>
    </el-form>
    <div class="flex-between operate">
      <el-button
        @click="resetPassword"
        type="text"
        color="rgb(118, 124, 130)"
        >{{ t('login.resetPassword') }}</el-button
      >
      <el-button @click="signup" type="text">{{ t('login.signup') }}</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

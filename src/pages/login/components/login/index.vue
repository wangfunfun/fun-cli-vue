<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import GeneralCache from '@/utils/general-cache'
import { useLanguageHook, i18nConfig } from '@/hooks/language'
import { ADMIN_FIRST_PAGE } from '@/common/admin'

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
  email: string
  password: string
}

const loginForm = reactive<FormState>({
  email: '',
  password: '',
})

const loginRules = ref({
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
    <el-form :model="loginForm" :rules="loginRules" ref="formRef" size="large">
      <el-form-item prop="email">
        <el-input
          v-model="loginForm.email"
          :placeholder="t('login.placeholder.email')"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          :placeholder="t('login.placeholder.password')"
        />
      </el-form-item>
      <el-form-item prop="password">
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

<style lang="scss" scoped>
.title {
  font-size: $font-size-xxl;
  font-weight: 600;
  padding-bottom: 50px;
}

.operate {
  padding-top: 25px;
}
</style>

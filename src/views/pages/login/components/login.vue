<template>
  <div class="slot" :style="nowLanguage == 'en-US' ? 'width:500px' : 'width:400px'">
    <div class="title not-select">{{ t('login.title') }}</div>
    <div class="form">
      <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef">
        <el-form-item prop="phone">
          <el-input
            v-model.trim="loginForm.phone"
            :placeholder="t('login.placeholder_phone_null')"
            autocomplete="off"
          >
            <template #prefix>
              <i class="el-input__icon el-icon-phone-outline"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model.trim="loginForm.password"
            show-password
            :placeholder="t('login.placeholder_pwd_null')"
            autocomplete="off"
          >
            <template #prefix>
              <i class="el-input__icon el-icon-edit"></i>
            </template>
          </el-input>
        </el-form-item>
        <div class="flex-between operate not-select" :class="isAutoLogin ? 'autoLogin' : ''">
          <el-checkbox v-model="isAutoLogin">{{ t('login.btn_login_auto') }}</el-checkbox>
          <el-button size="mini" type="text" @click="forgetPwd">
            {{ t('login.btn_forgetPwd') }}
          </el-button>
        </div>
        <el-form-item>
          <el-button class="not-select" style="width: 100%" type="primary" @click="loginByPwd">
            {{ t('login.btn_login') }}
          </el-button>
        </el-form-item>
        <div class="flex-between operate not-select">
          <el-button size="mini" type="text" @click="loginBySmsCode">
            {{ t('login.btn_login_smsCode') }}
          </el-button>
          <div>
            <span>{{ t('login.tip_account_not') }}</span>
            <el-button size="mini" type="text" @click="loginByTemp">
              {{ t('login.btn_login_temp') }}
            </el-button>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import Storage from '../../../../utils/storage'

interface loginType {
  isAutoLogin: boolean
  loginForm: {
    phone: string
    password: string
  }
  loginRules: {
    phone: any
    password: any
  }
}

export default defineComponent({
  setup() {
    const router = useRouter()
    const { t, locale } = useI18n()
    const nowLanguage = ref<string>('')

    watch(
      locale,
      (val: string) => {
        nowLanguage.value = val
      },
      { immediate: true, deep: true }
    )

    // 自定义校验规则
    const validatePhone = (rule: any, value: string, callback: any) => {
      const reg = /^1[0-9]{10}$/
      if (!value) {
        callback(new Error(t('login.placeholder_phone_null')))
      }
      if (!reg.test(value)) {
        callback(new Error(t('login.placeholder_phone_error')))
      }
      callback()
    }

    // 表单
    const login = reactive<loginType>({
      isAutoLogin: false,
      loginForm: {
        phone: '',
        password: ''
      },
      loginRules: {
        phone: [{ validator: validatePhone, trigger: 'blur' }],
        password: [
          { required: true, message: t('login.placeholder_pwd_null'), trigger: 'blur' },
          { min: 6, max: 18, message: t('login.placeholder_pwd_error'), trigger: 'blur' }
        ]
      }
    })

    /**
     * @name 临时登录方法
     */
    const loginByTemp = () => {
      new Storage('TOKEN', 'session', '123412341234').set()
      router.replace('/home')
    }

    /**
     * @name 忘记密码
     */
    const forgetPwd = () => {
      ElMessage.info(t('tip.development'))
    }

    /**
     * @name 短信验证码登录
     */
    const loginBySmsCode = () => {
      ElMessage.info(t('tip.development'))
    }

    /**
     * @name 手机号密码登录
     */
    const loginByPwd = () => {
      ElMessage.info(t('tip.development'))
    }

    return {
      ...toRefs(login),
      loginByTemp,
      forgetPwd,
      loginBySmsCode,
      loginByPwd,
      t,
      nowLanguage
    }
  }
})
</script>
<style lang="scss" scoped>
.slot {
  position: fixed;
  top: 55%;
  right: 80px;
  transform: translateY(-50%);
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 50px;
  background-color: #fff;
  z-index: 99;
}
.title {
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 4px;
  color: #555;
  text-align: center;
  margin-bottom: 70px;
  margin-top: 20px;
}
.form {
  :deep(.el-input__inner) {
    height: 50px !important;
    line-height: 50px !important;
    font-size: 16px !important;
    padding-left: 50px;
  }
  :deep(.el-input__icon) {
    line-height: 50px !important;
    font-size: 20px !important;
    width: 40px !important;
  }
  :deep(.el-button) {
    min-height: 50px !important;
    font-size: 16px;
  }
}
.operate {
  font-size: 16px;
  span {
    line-height: 1;
  }
  &.autoLogin {
    :deep(.el-checkbox__label) {
      color: #409eff;
    }
  }
  :deep(.el-checkbox__label) {
    font-size: 14px;
    color: #999;
  }
}
</style>

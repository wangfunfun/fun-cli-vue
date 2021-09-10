import { createI18n } from 'vue-i18n'
import Cookies from 'js-cookie'

// elementPlus 语言包
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'

// 用户自定义语言包
import devEnLocale from './lang/en-US'
import devZhLocale from './lang/zn-CN'

// 组装语言包
const messages = {
  'zh-CN': {
    languageName: '简体中文',
    ...devZhLocale,
    ...elementZhLocale
  },
  'en-US': {
    languageName: 'English',
    ...devEnLocale,
    ...elementEnLocale
  }
}

const i18n = createI18n({
  locale: Cookies.get('language') || 'zh-CN',
  messages
})

export default i18n

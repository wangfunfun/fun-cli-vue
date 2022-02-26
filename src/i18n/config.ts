import zhCN from 'element-plus/es/locale/lang/zh-cn'
import enUS from 'element-plus/es/locale/lang/en'
import { createI18n } from 'vue-i18n'
import GeneralCache from '@/utils/general-cache'
import { APP_DEFAULT_LANGUAGE } from '@/common/config'
import { IObject } from '@/@types/interface'

import zhCNLanguage from './zhCN'
import enUSLanguage from './enUS'

const messages: IObject = {
  zh: {
    ...zhCNLanguage,
    el: zhCN,
  },
  en: {
    ...enUSLanguage,
    el: enUS,
  },
}

const language: any = new GeneralCache('languageAlias', 'local').get()
const i18n = createI18n({
  locale: language || APP_DEFAULT_LANGUAGE,
  messages,
})

export default i18n

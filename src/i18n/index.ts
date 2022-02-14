import { zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui'
import { createI18n } from 'vue-i18n'
import GeneralCache from '@/utils/general-cache'
import { APP_DEFAULT_LANGUAGE } from '@/common/config'
import customZhCN from './language/zhCN.json'
import customEnUS from './language/enUS.json'

const messages = {
  zhCN: {
    ...customZhCN,
    naiveuiLanguage: zhCN,
    naiveuiDateLanguage: dateZhCN
  },
  enUS: {
    ...customEnUS,
    naiveuiLanguage: enUS,
    naiveuiDateLanguage: dateEnUS
  }
}

const language: any = new GeneralCache('language', 'local').get()
const i18n = createI18n({
  locale: language || APP_DEFAULT_LANGUAGE,
  messages
})

export default i18n

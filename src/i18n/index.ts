import { zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui'
import { createI18n } from 'vue-i18n'
import GeneralCache from '@/utils/general-cache'
import { DEFAULT_LANGUAGE_ALIAS } from '@/common/constant'
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
  locale: language || DEFAULT_LANGUAGE_ALIAS,
  messages
})

export default i18n

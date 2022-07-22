
import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import i18N from './i18n'
import App from './App.vue'
import AppProvider from './AppProvider.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import CliSvgIcon from '@/components/cli-svg-icon'
import piniaPluginPersist from 'pinia-plugin-persist'
import 'vite-plugin-svg-icons/register'

const app = createApp(App)
const appprovider = createApp(AppProvider)
appprovider.mount('#AppProvider', true)
app
  .use(i18N)
  .use(ElementPlus, { i18n: i18N })
  .use(router)
  .use(createPinia().use(piniaPluginPersist))
  .use(CliSvgIcon)
  .mount('#app', true)

// 【默认关闭】全局挂载 elementPlus的 svg图标库
// import * as ElIcons from '@element-plus/icons-vue'
// for (const icon in ElIcons) {
//   if (Reflect.has(ElIcons, icon)) {
//     app.component(icon, ElIcons[icon])
//   }
// }

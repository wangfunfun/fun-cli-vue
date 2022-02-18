// 核心模块
import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import i18N from './i18n'

// 组件导入
import App from './App.vue'
import AppProvider from './AppProvider.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import SvgIcon from '@/components/svg-icon'

// 注册插件
import piniaPluginPersist from 'pinia-plugin-persist'
import 'vite-plugin-svg-icons/register'

// 挂载 app && appprovider
const app = createApp(App)

const appprovider = createApp(AppProvider)

appprovider.mount('#AppProvider', true)

app
  .use(i18N)
  .use(ElementPlus, { i18n: i18N })
  .use(router)
  .use(createPinia().use(piniaPluginPersist))
  .use(SvgIcon)
  .mount('#app', true)

import { createApp } from 'vue'

// 引入 element plus
import ElementPlus from 'element-plus'

// elementUI plus
import 'element-plus/lib/theme-chalk/index.css'

import './style/theme/index.scss'

// 18n 国际化
import i18n from './locales'

// router 路由配置
import router from './router/config'

// vuex 配置
import { store, key } from './store'

// 引入根组件
import App from './App.vue'

// 挂载 router 之前先异步获取路由信息
store.dispatch('route/getLayoutRoute')

// 挂载
const app = createApp(App)
app.use(ElementPlus).use(router).use(i18n).use(store, key).mount('#app')

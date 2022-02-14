import { createApp } from 'vue'
import App from './App.vue'
import AppProvider from './AppProvider.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import i18n from './i18n'

const app = createApp(App)

const appprovider = createApp(AppProvider)

appprovider.mount('#appprovider', true)

app
  .use(i18n)
  .use(createPinia().use(piniaPluginPersist))
  .use(router)
  .mount('#app', true)

import { createApp } from 'vue'
import App from './App.vue'
import AppProvider from './AppProvider.vue'
import router from './router/config'
import { createPinia } from 'pinia';
import i18n from './i18n'

const app = createApp(App)

const appprovider = createApp(AppProvider)

appprovider.mount('#appprovider', true)

app.use(i18n).use(createPinia()).use(router).mount('#app', true)

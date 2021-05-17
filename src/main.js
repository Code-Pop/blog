import Vue, { createApp } from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.configureCompat({ WATCH_ARRAY: false })

createApp(App).mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins'
import './registerServiceWorker'
import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
  render: h => h(App)
}).$mount('#app')

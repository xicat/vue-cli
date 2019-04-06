import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/'
import store from './store/'
import i18n from './i18n/lang'

import '@/assets/css/index.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})

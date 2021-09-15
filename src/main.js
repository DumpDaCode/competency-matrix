import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSession from 'vue-session'

import mqlOptions from './plugins/mqlOptions.js'


Vue.use(VueSession)
Vue.config.productionTip = false

var baseURL = '/server'
Vue.use(mqlOptions, {
  baseURL: baseURL,
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

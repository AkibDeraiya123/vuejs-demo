import App from './App'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import Vue from 'vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

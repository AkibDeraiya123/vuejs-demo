import App from './App'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import Vue from 'vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VeeValidate from 'vee-validate'

Vue.component('icon', Icon)

Vue.use(VeeValidate)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

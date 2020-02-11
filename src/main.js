import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
}).$mount('#app')

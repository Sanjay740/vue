import Vue from 'vue'
import App from './App.vue'
import Apps from './components/Dashboard/DashboardComponent'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Apps)
}).$mount('#app')

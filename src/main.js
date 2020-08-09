import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import sdk from './app/sdk' 

Vue.config.productionTip = false

Vue.use(sdk);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

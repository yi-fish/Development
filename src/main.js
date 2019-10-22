import Vue from 'vue'
import App from './App.vue'
import '..//lib/bootstrap-3.3.7-dist/css/bootstrap.css'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

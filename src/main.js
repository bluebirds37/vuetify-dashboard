import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import vueCropper from '@/plugins/vueCropper'
import '@/styles/index.scss'





Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  vueCropper,
  render: h => h(App)
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueOccupy from 'vue-occupy'

Vue.use(VueOccupy);//占位
Vue.use(ElementUI);//ElementUI

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

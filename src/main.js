import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
// 加载 Vant 全局样式
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

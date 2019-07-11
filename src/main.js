import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/minireset.min.css'
import App from './App.vue'
import router from './router/router'
import ajax from './ajax/ajax'
import echarts from 'echarts'
// import 'https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值'

Vue.use(ElementUI)
Vue.prototype.$ajax = ajax
Vue.prototype.$ec = echarts

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

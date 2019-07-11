import Vue from 'vue'
import Router from 'vue-router'
// 路由懒加载
const login = () => import('../components/login')
const error = () => import('../components/error')
const index = () => import('../components/index')
const page1 = () => import('../components/pages/page1.vue')
const page2 = () => import('../components/pages/echarts.vue')

Vue.use(Router)

const router = new Router({
  routes:[
    {path:'/login',name:'login',component:login},
    {path:'/index',name:'index',component:index,children:[
      {path:'',name:'page1',component:page1},
      {path:'page2',name:'page2',component:page2}
    ]},
    {path:'*',component:error}
  ],
  base:'cloudeletric',// 地址前缀，避免与其他项目冲突
  mode:'history'// 移除访问地址栏的#
})

export default router

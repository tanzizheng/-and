//import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'theader',
      component: () => import('@/views/Index/index')
    },
    {
      path: '/Index',
      name: 'index',
      component: () => import('@/views/Index/index')
    },
    {
      path: '/About',
      name: 'about',
      component: () => import('@/views/About/about')
    },
    {
      path: '/News',
      name: 'news',
      component: () => import('@/views/News/news')
    },
    {
      path: '/Product',
      name: 'product',
      component: () => import('@/views/Product/product')
    },
    {
      path: '/Case',
      name: 'case',
      component: () => import('@/views/Case/case')
    },
    // {
    //   path: '/Right_nav',
    //   name: 'Right_nav',
    //   component: resolve => require(['@/views/Right_nav/index'],resolve)
    // }
  ]
})

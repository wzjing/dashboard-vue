import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './views/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/refund',
      name: 'refund',
      component: () => import(/* webpackChunkName: "refund" */ './views/RefundList.vue')
    },
    {
      path: '/cancel',
      name: 'cancel',
      component: () => import(/* webpackChunkName: "cancel" */ './views/CancelList.vue')
    },
    {
      path: '/equip',
      name: 'equip',
      component: () => import(/* webpackChunkName: "equip" */ './views/EquipList.vue')
    },
    {
      path: '/video',
      component: () => import(/* webpackChunkName: "video" */ './views/VideoList.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import(/* webpackChunkName: "setting" */ './views/Setting.vue')
    }
  ]
})

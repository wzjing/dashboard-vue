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
      path: '/event',
      name: 'event',
      component: () => import(/* webpackChunkName: "event" */ './views/Event.vue')
    },
    {
      path: '/video',
      component: () => import(/* webpackChunkName: "video" */ './views/Video.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "setting" */ './views/Setting.vue')
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/Home.vue'
import EventPage from './views/Event.vue'
import VideoPage from './views/Video.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/event',
      name: 'event',
      component: EventPage
    },
    {
      path: '/video',
      component: VideoPage
    },
    {
      path: '/setting',
      name: 'setting',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Setting.vue')
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:  () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/business',
    name: 'Business',
    component: () => import(/* webpackChunkName: "about" */ '../views/Business.vue')
  },
  {
    path: '/technology',
    name: 'Technology',
    component: () => import(/* webpackChunkName: "about" */ '../views/Technology.vue')
  },
  {
    path: '/sport',
    name: 'Sport',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sport.vue')
  },
  {
    path: '/entertainment',
    name: 'Entertainment',
    component: () => import(/* webpackChunkName: "about" */ '../views/Entertainment.vue')
  },
  {
    path: '/:currentSource',
    name: 'Sources',
    component: () => import(/* webpackChunkName: "about" */ '../views/Source.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/actual',
    name: 'actual',

    component: () => import('../views/Actual.vue')
  },
  {
    path: '/about',
    name: 'about', 
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: "*", component: () => import(/* webpackChunkName: "about" */ '../views/Pagenotfound.vue') }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: "/gamelist",
  component: () => import('@/views/GameList')
}, {
  path: "/login",
  component: () => import('@/views/Login')
}, {
  path: "/register",
  component: () => import('@/views/Register')
}, {
  path: "/game/:id",
  component: () => import('@/views/GameDetail')
}, {
  path: "/orderInfo/:id",
  component: () => import('@/views/OrderInfo')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
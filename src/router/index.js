import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminMainPage from '../views/AdminMainPage.vue'
import Home from '../views/Home.vue'
import AdminAuth from '../views/AdminAuth'
import EmpAuth from '../views/EmpAuth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'AdminMainPage',
    component: AdminMainPage
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'EmpAuth',
    component: EmpAuth,
  },
  {
    path: '/AdminAuth',
    name: 'AdminAuth',
    component: AdminAuth,
  },
]

const router = new VueRouter({
  routes
})

export default router

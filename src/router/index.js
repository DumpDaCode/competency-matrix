import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminMainPage from '../views/AdminMainPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'AdminMainPage',
    component: AdminMainPage
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '@/components/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/logout",
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '@/components/Profile.vue'
import AASkills from '@/components/AASkills.vue'
import AUSkills from '@/components/AUSkills.vue'
import Teams from '@/components/Teams.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/logout",
  },
  {
    path: "/admin/add-skills",
    component: AASkills
  },
  {
    path: "/admin/update-skills",
    component: AUSkills
  },
  {
    path: "/admin/list-teams",
    component: Teams
  },
  {
    path: "/search",
  }
]

const router = new VueRouter({
  routes
})

export default router

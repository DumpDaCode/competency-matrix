import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '@/components/Profile.vue'
import AASkills from '@/components/AASkills.vue'
import AUSkills from '@/components/AUSkills.vue'
import Teams from '@/components/Teams.vue'
import EASkills from '@/components/EASkills.vue'
import EUSkills from '@/components/EUSkills.vue'
import EPASkills from '@/components/EPASkills.vue'


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
    path: "/employee",
  },
  {
    path: "/employee/add-skills",
    component: EASkills
  },
  {
    path: "/employee/update-skills",
    component: EUSkills
  },
  {
    path: "/employee/pending-approval",
    component: EPASkills
  },
]

const router = new VueRouter({
  routes
})

export default router

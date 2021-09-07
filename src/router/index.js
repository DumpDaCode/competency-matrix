import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '@/components/EProfile.vue'
import ASkills from '@/components/ASkills.vue'
import ASettings from '@/components/ASettings.vue'
import ATeams from '@/components/ATeams.vue'
import ESkills from '@/components/ESkills.vue'
import EApproval from '@/components/EApproval.vue'
import ERequest from '@/components/ERequest.vue'
import Report from '@/components/Report.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: "/logout",
  },
  {
    path: "/",
  },
  {
    path: "/admin/skills",
    component: ASkills
  },
  {
    path: "/admin/settings",
    component: ASettings
  },
  {
    path: "/admin/teams",
    component: ATeams
  },
  {
    path: "/user",
  },
  {
    path: "/user/profile",
    component: Profile
  },
  {
    path: "/user/skills",
    component: ESkills
  },
  {
    path: "/user/approval",
    component: EApproval
  },
  {
    path: "/user/request",
    component: ERequest
  },
  {
    path: "/user/report",
    component: Report
  },
]

const router = new VueRouter({
  routes
})

export default router

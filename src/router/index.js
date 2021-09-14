import Vue from 'vue'
import VueRouter from 'vue-router'

import Profile from '@/components/EProfile.vue'
import Login from '@/components/Login.vue'

import ASkills from '@/components/ASkills.vue'
import ASettings from '@/components/ASettings.vue'
import ATeams from '@/components/ATeams.vue'
import AApraiser from '@/components/AAppraiser.vue'

import ESkills from '@/components/ESkills.vue'
import EApproval from '@/components/EApproval.vue'
import ERequest from '@/components/ERequest.vue'
import Report from '@/components/Report.vue'
import Doc from '@/components/Doc.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/admin",
    redirect: "/admin/settings"
  },
  {
    path: "/admin/importdoc",
    component: Doc
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
    path: "/admin/appraiser",
    component: AApraiser
  },
  {
    path: "/user",
    redirect: "/user/profile"
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

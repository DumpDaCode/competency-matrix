<template>
  <div>
    <div class="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
      <div class="nano">
          <div class="nano-content">
              <div class="logo"><a href=""><span>Dashboard</span></a></div>
              <EmpActions/>
              <!-- <AdminActions/> -->
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmpActions from './EmpActions.vue'
// import AdminActions from './AdminActions.vue'

export default {
  name: "Dashboard",
  components:{
      EmpActions,
      // AdminActions
  },
  data(){
      return {
          hidden: false
      }
  }
}
</script>
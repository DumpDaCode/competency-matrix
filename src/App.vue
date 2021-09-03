<template>
  <div>
    <LoginPage v-if="this.state.session.type === ''" />
    <EmpMainPage v-if="this.state.session.type === 'user'" />
    <AdminMainPage v-if="this.state.session.type === 'admin'" />
  </div> 
</template>

<script>
import AdminMainPage from '@/views/AdminMainPage.vue'
import EmpMainPage from '@/views/EmpMainPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import { mapState } from 'vuex'

export default {
  name: "App",
  components: {
    AdminMainPage,
    EmpMainPage,
    LoginPage
  },
  computed: mapState(['session'])
};
</script>

<style>

</style>

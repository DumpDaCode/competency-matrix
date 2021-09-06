<template>
  <div>
    <LoginPage v-if="this.$store.state.session.type === ''" />
    <EmpMainPage v-if="this.$store.state.session.type === 'user'" />
    <AdminMainPage v-if="this.$store.state.session.type === 'admin'" />
  </div> 
</template>

<script>
import AdminMainPage from '@/views/AdminMainPage.vue'
import EmpMainPage from '@/views/EmpMainPage.vue'
import LoginPage from '@/views/LoginPage.vue'

export default {
  name: "App",
  components: {
    AdminMainPage,
    EmpMainPage,
    LoginPage
  }
};
</script>

<style>
label{
    width: 100px
}
</style>

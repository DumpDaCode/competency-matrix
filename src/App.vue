<template>
  <div>
    <LoginPage v-if="this.$store.state.session.type === ''" />
    <MainPage v-else />
  </div> 
</template>

<script>
import MainPage from '@/views/MainPage.vue'
import LoginPage from '@/views/LoginPage.vue'

export default {
  name: "App",
  components: {
    MainPage,
    LoginPage
  }
};
</script>

<style>
label{
    width: 150px
}
</style>

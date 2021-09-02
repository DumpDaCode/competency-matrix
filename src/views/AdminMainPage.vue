<template>
  <div class="d-flex">
    <Dashboard />
    <MainPage />
  </div>
</template>

<script>
import Dashboard from '@/components/DashBoard.vue';
import MainPage from '@/components/MainPage.vue'

export default {
  name: 'AdminMainPage',
  components: {
    Dashboard,
    MainPage
  }
}
</script>

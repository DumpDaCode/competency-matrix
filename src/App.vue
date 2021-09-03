<template>
  <div>
    <AdminMainPage />
    <!-- <EmpMainPage /> -->
  </div>
</template>

<script>
// import EmpMainPage from './views/EmpMainPage.vue'
import AdminMainPage from "./views/AdminMainPage.vue";

export default {
  name: "App",
  components: {
    AdminMainPage,
  }
}
</script>


<style>
  @import "../src/assets/css/lib/menubar/sidebar.css";
  @import "../src/assets/css/lib/font-awesome.min.css";
  @import "../src/assets/css/lib/themify-icons.css";
  @import "../src/assets/css/lib/bootstrap.min.css";
  @import "../src/assets/css/lib/helper.css";
  @import "../src/assets/css/style.css";
</style>

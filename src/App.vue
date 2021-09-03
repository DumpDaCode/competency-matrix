<template>
  <div>
    <!-- <EmpMainPage /> -->
    <nav>

      | <router-link to="/">Employee Login</router-link> |
      | <router-link to="/AdminAuth">Admin Login</router-link> |
  
    </nav>
        <router-view />
  </div>
</template>

<script>
// import EmpMainPage from './views/EmpMainPage.vue'

export default {
  components: {
    // EmpMainPage
    // Authentication,
  },
};
</script>

<style>
  /* @import "../src/assets/css/lib/menubar/sidebar.css";
  @import "../src/assets/css/lib/font-awesome.min.css";
  @import "../src/assets/css/lib/themify-icons.css";
  @import "../src/assets/css/lib/bootstrap.min.css";
  @import "../src/assets/css/lib/helper.css";
  @import "../src/assets/css/style.css"; */
/* @import "../src/assets/css/lib/menubar/sidebar.css";
@import "../src/assets/css/lib/font-awesome.min.css";
@import "../src/assets/css/lib/themify-icons.css";
@import "../src/assets/css/lib/bootstrap.min.css";
@import "../src/assets/css/lib/helper.css";
@import "../src/assets/css/style.css"; */

nav{
  text-align: right;
  background-color: whitesmoke;
  font-size: 20px;
  color: black;
  
}
a{
  color: black;
}
a:hover{
  background-color:white;
}
</style>

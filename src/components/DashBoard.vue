<template>
  <ul class="nav flex-column dashboard">
      <li class="nav-item nav-brand">
        <img src="@/assets/icons/logo.png" alt="" width=120>
      </li>
      <AActions v-if="this.$store.state.session.type === 'admin'" />
      <EActions v-if="this.$store.state.session.type === 'user'" />
  </ul>
</template>

<script>
import EActions from "@/components/EActions.vue";
import AActions from "@/components/AActions.vue";

export default {
  name: "Dashboard",
  components: {
    EActions,
    AActions,
  },
};
</script>

<style scoped>
.dashboard{
  height: 100vh;
  box-shadow: 1px 0px 2px gray;
}
</style>
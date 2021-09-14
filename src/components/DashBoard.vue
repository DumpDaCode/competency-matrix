<template>
  <ul class="nav flex-column dashboard" v-if="this.$store.state.flags.toggle">
      <li class="nav-item nav-brand">
        <div class="container my-5">
          Competency Matrix
        </div>
      </li>
      <AActions v-if="this.$sesion.exists() && this.$session.get('type') === 'admin'" />
      <EActions v-if="this.$sesion.exists() && this.$session.get('type') === 'user'" />
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
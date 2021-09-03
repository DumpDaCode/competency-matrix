<template>
    <div>
        <div class="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
                <div class="nano">
                    <div class="nano-content">
                        <div class="logo"><a href=""><span>Dashboard</span></a></div>
                        <AActions v-if="this.$store.state.session.type === 'admin'"/>
                        <EActions v-if="this.$store.state.session.type === 'user'"/>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import EActions from  '@/components/EActions.vue'
import AActions from '@/components/AActions.vue'

export default {
    name: "Dashboard",
    components: {
        EActions,
        AActions

    }
}
</script>

<style scoped>
@import "../src/assets/css/lib/menubar/sidebar.css";
@import "../src/assets/css/lib/font-awesome.min.css";
@import "../src/assets/css/lib/themify-icons.css";
@import "../src/assets/css/lib/bootstrap.min.css";
@import "../src/assets/css/lib/helper.css";
@import "../src/assets/css/style.css"; 

.topnav {
    display: flex;
    justify-content: flex-end;
    width: 100vw;
}

</style>
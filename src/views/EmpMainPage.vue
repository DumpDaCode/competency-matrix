<template>
    <div class="d-flex">
        <Dashboard />
        <Content />
    </div>
</template>

<script>
import Dashboard from '../components/DashBoard.vue'
import Content from '../components/Content.vue';

export default {
    name: "AdminMainPage",
    components:{
        Dashboard,
        Content,
    }
}
</script>
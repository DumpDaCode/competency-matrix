<template>
    <div class="row">
        <div class="col-1">
            <Dashboard />
        </div>
        <div class="col-11">
            <Content />
        </div>
    </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue';
import Content from '@/components/Content.vue';

export default {
    name: "EmpMainPage",
    components:{
        Dashboard,
        Content
    }
}
</script>
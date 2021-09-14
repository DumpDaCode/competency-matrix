<template>
    <div class="d-flex">
        <Dashboard v-if="this.$session.get('type') !== ''"/>
        <Content />
    </div>
</template>

<script>
import Dashboard from '@/components/DashBoard.vue'
import Content from '@/components/Content.vue';

export default {
    name: "MainPage",
    components:{
        Dashboard,
        Content,
    },
    mounted(){
        if(this.$session.get("type") === ""){
            this.$router.push('/login')
        }
        else{
            console.log("Set State here")
        }
    }
}
</script>
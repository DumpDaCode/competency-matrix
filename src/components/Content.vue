<template>
    <div class="d-flex flex-column w-100">
        <CHead />
        <div class="container mt-5 inside-scroll">
            <router-view />
        </div>      
    </div>
</template>

<script>
import CHead from '@/components/CHead.vue'

export default {
    name: "Content",
    components: {
        CHead
    }
}
</script>

<style scoped>
.inside-scroll{
    overflow-x:hidden;
    overflow-y:auto;
    height: 80vh;
}
</style>
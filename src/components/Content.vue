<template>
    <div class="d-flex flex-column w-100">
        <CHead />
        <div class="container mt-3">
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

</style>
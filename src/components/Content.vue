<template>
    <div class="d-flex flex-column w-100">
        <CHead v-if="(this.$session.exists('type') || !this.$session.get('type') === '')"/>
        <div class="inside-scroll">
            <div class="container mt-5">
                <router-view />
            </div>      
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
<template>
    <div class="d-flex flex-column w-100">
        <CHead />
        <Main />        
    </div>
</template>

<script>
import CHead from '@/components/CHead.vue'
import Main from '@/components/Main.vue'

export default {
    name: "Content",
    components: {
        CHead,
        Main
    }
}
</script>

<style scoped>

</style>
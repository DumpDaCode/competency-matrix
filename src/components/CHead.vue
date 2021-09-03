<template>
    <div class="head bg-light py-4">
        <div class="d-flex justify-content-end">
            <input type="text" name="Search" placeholder="Search">
            <span class="px-4"><Account class="border border-dark p-2 rounded-circle"/></span>
        </div>
    </div>
</template>

<script>
import Account from 'vue-material-design-icons/Account.vue'

export default {
    name: "CHead",
    components:{
        Account
    }
}
</script>

<style scoped>
.head{
    width: 100%;
    box-shadow: 0 1px 2px gray;
}
</style>
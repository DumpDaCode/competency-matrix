<template>
    <div class="actions">
        <li class="nav-item m-3"><router-link to="/employee/add-skills" class="link-dark text-decoration-none"><Plus /> Add</router-link></li>
        <li class="nav-item m-3"><router-link to="/employee/update-skills" class="link-dark text-decoration-none"><Update/> Update</router-link></li>
        <li class="nav-item m-3"><router-link to="/employee/pending-approval" class="link-dark text-decoration-none"><Email/> Approvals</router-link></li>
    </div>
</template>

<script>
import Plus from 'vue-material-design-icons/Plus.vue'
import Update from 'vue-material-design-icons/Update.vue'
import Email from 'vue-material-design-icons/Email.vue'

export default {
    name: "AActions",
    components:{
        Plus, 
        Update,
        Email
    }
}
</script>

<style scoped>
.actions{
    width: 150px;
}
</style>
<template>
    <div class="actions">
        <li class="nav-item m-3"><router-link to="/admin/add-skills" class="link-dark text-decoration-none"><Plus /> Add</router-link></li>
        <li class="nav-item m-3"><router-link to="/admin/update-skills" class="link-dark text-decoration-none"><Update/> Update</router-link></li>
        <li class="nav-item m-3"><router-link to="/admin/list-teams" class="link-dark text-decoration-none"><Group /> List</router-link></li>
    </div>
</template>

<script>
import Plus from 'vue-material-design-icons/Plus.vue'
import Update from 'vue-material-design-icons/Update.vue'
import Group from 'vue-material-design-icons/AccountGroup.vue'

export default {
    name: "AActions",
    components:{
        Plus, 
        Update,
        Group
    }
}
</script>

<style scoped>
.actions{
    width: 150px;
}
</style>
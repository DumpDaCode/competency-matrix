<template>
    <div class="actions">
        <li class="nav-item m-3"><router-link to="/admin/skills" class="link-dark text-decoration-none"><Table /> Skills</router-link></li>
        <li class="nav-item m-3"><router-link to="/admin/settings" class="link-dark text-decoration-none"><Settings/> Settings</router-link></li>
        <li class="nav-item m-3"><router-link to="/admin/teams" class="link-dark text-decoration-none"><Group /> Teams</router-link></li>
        <li class="nav-item m-3"><router-link to="/admin/importdoc" class="link-dark text-decoration-none"><Group /> Import Data</router-link></li>
    </div>
</template>

<script>
import Table from 'vue-material-design-icons/Table.vue'
import Settings from 'vue-material-design-icons/AccountCog.vue'
import Group from 'vue-material-design-icons/AccountGroup.vue'

export default {
    name: "AActions",
    components:{
        Table, 
        Settings,
        Group
    }
}
</script>

<style scoped>
.actions{
    width: 150px;
}
</style>
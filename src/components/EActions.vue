<template>
    <div class="actions">
        <li class="nav-item m-3"><router-link to="/user/profile" class="link-dark text-decoration-none"><ProfileIcon /> Profile Info</router-link></li>
        <li class="nav-item m-3"><router-link to="/user/skills" class="link-dark text-decoration-none"><Table /> Add Skills</router-link></li>
        <li class="nav-item m-3"><router-link to="/user/approval" class="link-dark text-decoration-none"><Approval/> Approval</router-link></li>
        <li class="nav-item m-3"><router-link to="/user/request" class="link-dark text-decoration-none"><Request/> Request</router-link></li>
        <li class="nav-item m-3"><router-link to="/user/report" class="link-dark text-decoration-none"><Report/> Report</router-link></li>
    </div>
</template>

<script>
import Table from 'vue-material-design-icons/Table.vue'
import ProfileIcon from 'vue-material-design-icons/Account.vue'
import Approval from 'vue-material-design-icons/ArrowUpDropCircle.vue'
import Request from 'vue-material-design-icons/ArrowDownDropCircle.vue'
import Report from 'vue-material-design-icons/FileDocument.vue'

export default {
    name: "AActions",
    components:{
        Table, 
        ProfileIcon,
        Approval,
        Request,
        Report
    }
}
</script>

<style scoped>
.actions{
    width: 150px;
}
</style>
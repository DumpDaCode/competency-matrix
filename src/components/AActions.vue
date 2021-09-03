<template>
    <div class="actions">
        <li class="nav-item m-3"><Plus /> Add</li>
        <li class="nav-item m-3"><Update/> Update</li>
        <li class="nav-item m-3"><Group /> List</li>
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
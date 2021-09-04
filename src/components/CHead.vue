<template>
    <div>
        <div class="head bg-light py-4 position-relative">
            <div class="d-flex justify-content-end ">
                <input type="text" name="Search" placeholder="Search">
                <span class="px-4" @click="hidden = !hidden"><Account class="border border-dark p-2 rounded-circle"/></span>
            </div>
        </div>
        <div class="d-flex justify-content-end position-absolute end-0 p-2 bg-dark" v-if="hidden === false">
            <ul class="nav flex-column">
                <li class="nav-link"><router-link to="/profile" class="link-light">Profile</router-link></li>
                <li class="nav-link"><router-link to="/logout" class="link-light">LogOut</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
import Account from 'vue-material-design-icons/Account.vue'

export default {
    name: "CHead",
    data(){
        return {
            hidden: true
        }
    },
    components:{
        Account
    },
}
</script>

<style scoped>
.head{
    width: 100%;
    box-shadow: 0 1px 2px gray;
}
ul{
    list-style-type: none;
    margin: 0;
    padding: 0%;
}
</style>
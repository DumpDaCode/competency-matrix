<template>
    <div>
        <div class="head bg-light py-4 position-relative">
            <div class="d-flex justify-content-between ">
                <div class="px-4" @click="toggleMenu"><Menu /></div>
                <div>
                    <input type="text" name="Search" placeholder="Search" v-model="SkillName">{{SkillName}}
                    <span class="px-4" @click="searchUsers()"><SearchIcon class="border border-dark p-2 rounded-circle"/></span>
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Menu from 'vue-material-design-icons/Menu.vue'
import SearchIcon from 'vue-material-design-icons/TextSearch.vue'

export default {
    name: "CHead",
    data(){
        return {
            hidden: true,
            toggle: true, 
            SkillName:'',
            
        }
    },
    components:{
        Menu,
        SearchIcon
    },
    methods:{
        toggleMenu(){
            this.$store.state.flags.toggle = !this.$store.state.flags.toggle
        },
        searchUsers(){
            console.log("function called")
            axios.post("http://localhost:8081/searchskill",{SkillName : this.SkillName})
            .then((res)=>{
                
                console.log(res.data.skills)
                this.$store.state.SearchSkills=res.data.skills  
                this.$router.push("/search")
            }) 
            .catch((err)=>{
                console.log(err)
            })
            
        }
    }
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
<template>
    <div>
        <div>List Teams
            {{member}}-{{appraiser}}-{{team}}
            <div class="">
                <form action="" @submit.prevent='teamallocation()'>
                    <div class="my-3">
                        <div class="my-4">
                            <label for="type">Member:</label><input type="text" name="Type" id="type" v-model="member">
                        </div>
                        <div class="my-4">
                            <label for="name">Appraiser:</label><input type="text" name="Name" id="appraiser" v-model="appraiser">
                        </div>
                        <div class="my-4">
                            <label for="name">Team:</label><input type="text" name="Name" id="Team" v-model="team">
                        </div>
                    </div>
                    <button class="btn btn-primary"><Plus/></button>
                </form>
            </div>
        </div>
        <table  class="w-100 mt-5">
            <tr>
                <th>Member</th>
                <th>Appraiser</th>
                <th>Team Allocated</th>
            </tr>
            <tr v-for="team in teams" :key="team.name">
                <td>{{team.members}}</td>
                <td>{{team.appraiser}}</td>
                <td>{{team.name}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import Plus from 'vue-material-design-icons/Plus.vue'

export default {
    name: "Teams",
    components:{
        Plus
    },
    data(){
       return {
           teams: [{
               name: "MMS-DP",
               members: "Rajivranjan Singh",
               appraiser: "Amol Jadhao"
           },
           {
               name: "MMS-DP",
               members: "Nawaz Shaikh",
               appraiser: "Amol Jadhao"
           },
           {
               name: "Competency Matrix",
               members: "Akshay Mahendrakar",
               appraiser: "Rajiv"
           },
           {
               name: "Competency Matrix",
               members: "Akanksha Gupta",
               appraiser: "Akanksha Gupta"
           }],
           member:'',
           appraiser:'',
           team:''
       }
    },
    methods : {
        teamallocation(){
            var alloc= {
                members:this.member,
                appraiser:this.appraiser,
                name:this.team
            }
            console.log(alloc)
            this.teams.push(alloc)
            // axios.post('/teamalloc',alloc)
        
            // .then((response)=>{
            //     console.log(response.data)
            
            // }).catch((e)=>{
            //     console.log(e)
            // })
        }

    }
}
</script>
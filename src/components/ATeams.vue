<template>
    <div>
        <div>List Teams
            <div class="">
                <form action="">
                    <div class="my-3">
                        <div class="my-4">
                            <label for="type">Member:</label><input type="text" name="Type" id="type">
                        </div>
                        <div class="my-4">
                            <label for="name">Appraiser:</label><input type="text" name="Name" id="appraiser">
                        </div>
                        <div class="my-4">
                            <label for="name">Team:</label><input type="text" name="Name" id="Team">
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
           }]
       }
    }
}
</script>
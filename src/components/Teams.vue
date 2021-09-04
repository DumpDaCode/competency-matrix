<template>
    <div>
        <div>List Teams
            <div class="d-flex justify-content-end">
                <button class="btn btn-primary"><Plus/></button>
            </div>
        </div>
        <table  class="w-100 mt-5">
            <tr>
                <th>Team Name</th>
                <th>Team Members</th>
                <th>Appraiser</th>
            </tr>
            <tr v-for="team in teams" :key="team">
                <td>{{team.name}}</td>
                <td>{{team.members}}</td>
                <td>{{team.appraiser}}</td>
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
               name: "A",
               members: "x,y,z",
               appraiser: "C"
           },
           {
               name: "B",
               members: "a,s,d",
               appraiser: "D"
           },
           {
               name: "E",
               members: "f,g,h",
               appraiser: "R"
           },
           {
               name: "W",
               members: "a,s,d,f",
               appraiser: "T"
           }]
       }
    }
}
</script>
<template>
  <div class="main">
      <h3>Approval status:</h3>
      <table class="table mt-3">
          <tr>
              <th>Appraiser Name</th>
              <th>Skills</th>
              <th>Experience</th>
              <th>Status</th>
          </tr>
          <tr v-for="approval in approvals" :key="approval.id">
              <td>{{approval.name}}</td>
              <td>{{approval.skills}}</td>
              <td>{{approval.experience}}</td>
              <td>{{approval.status}}</td>
          </tr>
      </table>
  </div>
</template>
 
<script>
export default {
    name: 'EPASkills',
    data: function(){
        return{
            approvals: [{
                name: "Amol Jadhao",
                skills: "C",
                experience: "3",
                status: "Not Approved"
            },
            {
                name: "Pranab Sharma",
                skills: "DBMS",
                experience: "3",
                status: "Approved"
            },
            {
                name: "Amol Jadhao",
                skills: "C++",
                experience: "4",
                status: "Approved"
            }]
        }
    }
}
</script>
 
 
<style scoped>
 table{
     text-align: center;
 } 
 th{
    padding: 5px;
    border: 1px solid black;
}
td{
    padding: 5px;
    border: 1px solid black;
} 
</style>
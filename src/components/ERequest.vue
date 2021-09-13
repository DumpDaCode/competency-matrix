<template>
  <div class="main">
      <h3>Request status:</h3>  
      <table class="table mt-3">
          <tr>
              <th>Employee Name</th>
              <th>Skills</th>
              <th>Experience</th>
              <th>Actions</th>
          </tr>
          <tr v-for="approval in approvals" :key="approval.id">
              <td>{{approval.name}}</td>
              <td>{{approval.skills}}</td>
              <td>{{approval.experience}}</td>
              <td>
                  <button class="btn btn-primary me-3">Allow</button>
                  <button class="btn btn-primary ms-3" @click="editSkills">Edit</button>
              </td>
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
            }],
            modal: false
        }
    },
    methods:{
        editSkills(){

        }
    }
}
</script>
 
 
<style scoped>
.table button{
    background-color: #0d6efd !important;
} 
th{
    padding: 5px;
    border: 1px solid black;
}
td{
    padding: 5px;
    border: 1px solid black;
} 
.modal-bg{
    background-color: white;
}
</style>
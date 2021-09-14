<template>
  <div class="main">
      <h3>Employee Request status:</h3>  
      <table class="table mt-3">
          <tr>
              <th>Employee Name</th>
          <th>Domain Type</th>
              <th>Skills</th>
              <th>Experience</th>
                <th>Proficiency Level</th>
              <th>Actions</th>
              <th>Comment</th>
          </tr>
          <tr v-for="approval in approvals" :key="approval.id">
              <td>{{approval.name}}</td>
              <td>{{approval.skills}}</td>
              <td>{{approval.experience}}</td>
              <td></td>
              <td></td>
              <td>
                  <button class="btn btn-primary me-3">Accept</button>
                  <button class="btn btn-primary ms-3" @click="editSkills">Reject</button>
              </td>
              <td>Comment</td>
          </tr>
      </table>
  </div>
</template>
 
<script>
export default {
    name: 'EPASkills',
    data: function(){
        return{
          profile:{},
            modal: false,
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
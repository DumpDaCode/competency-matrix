<template>
  <div class="main">
    <h4>Employee Details</h4>
    <p>Name: {{userDetails.FirstName + " "+userDetails.LastName}}</p>
    <p>Email: {{userDetails.Email}}</p>
    <p>Username: {{userDetails.Username}}</p>
    <p>Skills: </p>
    <!-- {{this.$route.params.userdetail}} -->
    <table class="table">
      <thead>
        <tr>
          <th>Skill Domain</th>
          <th>Skill Name</th>
          <th>Years of Experience</th>
          <th>Proficiency Level</th>
          <th>Approved by</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="skill in skills" :key="skill.name">
          <td>{{skill.domain}}</td>
          <td>{{skill.name}}</td>
          <td>{{skill.experience}}</td>
          <td>{{skill.appraiser}}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "EmpMainPage",
  data(){
    return{
      skills : []
    }
  },
  mounted(){
    axios.post("/request", this.$session.get("uid"))
    .then(res => {
      console.log(res)
      this.skills = res.data.skills
    })
    .catch(err => {
      console.log(err)
    })
  }
};
</script>

<style>
th{
  padding: 5px;
  border: 1px solid black;
}
td{
  padding: 5px;
  border: 1px solid black;
} 
table{
  text-align: center;
}
</style>

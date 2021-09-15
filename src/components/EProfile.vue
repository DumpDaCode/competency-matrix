<template>
  <div class="main">
    <h4>Employee Details</h4>
    <p>Name: {{profile.EmployeeName}}</p>
    <p>Email: {{profile.Email}}</p>
    <p>Username: {{profile.ShortName}}</p>
    <hr>
    <p>Skills: </p> 
    <!--  {{this.$route.params.userdetail}} -->
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
      skills : [],
      profile:{},
      // userDetails:this.$route.params.userdetail,
    }
  },
  mounted(){
    console.log("uid",this.$session.get("uid"));
    axios.post("http://localhost:8081/profile", {"uid": this.$session.get("uid")})
    .then(res => {
      console.log(res)
      this.profile = res.data.GetProfile
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

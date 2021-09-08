<template>
  <div class="main">
    <h3>Profile</h3>
    <p>Username: {{info.shortname}}</p>
    <p>Appraiser: {{info.appraiser}}</p>
    <p>Skills: </p>
    <table class="table">
      <thead>
        <tr>
          <th>Skill Domain</th>
          <th>Skill</th>
          <th>Years of Experience</th>
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
  name: "Profile",
  data(){
    return{
      info: {},
      skills : [{
        domain: "Non-Technical",
        name:  "SEO",
        experience: "3",
        appraiser: "Swapnil Bhaeti" 
      },
      {
        domain: "Technical",
        name:  "C++",
        experience: "4",
        appraiser: "Amol Jadhao" 
      },
      {
        domain: "Technical",
        name:  "C",
        experience: "2",
        appraiser: "Mukesh Harane" 
      }]
    }
  },
  mounted(){
    axios
    .post("http://localhost:8081/profile", {"shortname": this.$store.state.session.uid})
    .then(res => {
      this.info = res.data
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

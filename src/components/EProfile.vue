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
export default {
  name: "EmpMainPage",
  data(){
    return{
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
      }],
      userDetails:this.$route.params.userdetail,
    }
  },
  // mounted:{
  // this.userDetails = 
  // }
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

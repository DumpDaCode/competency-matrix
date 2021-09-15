<template>
  <div class="main">
    <h3>Approval status:</h3>
    <table class="table mt-3">
      <tr>
        <th>Appraiser Name</th>
        <th>Domain Type</th>
        <th>Skill Name</th>
        <th>Experience</th>
        <th>Proficiency Level</th>
        <th>Status</th>
      </tr>
      <template v-for="(p) in EmpRequest">
        <template v-for="(set) in p.SkillSet">
          <template v-for="(detail) in set.SkillDetail">
            <tr :key="detail.SkillName">
              <td>{{ p.EmployeeName }}</td>
              <td>{{ set.DomainType }}</td>
              <td>{{ detail.SkillName }}</td>
              <td>{{ detail.Experience }}</td>
              <td>{{ detail.Proficiency }}</td>
              <td>{{ detail.Status ? "approved" : "pending"  }}</td>
            </tr>
          </template>
        </template>
      </template>
    </table>
  </div>
</template>
 
<script>
import axios from 'axios'
export default {
  name: "EPASkills",
  data: function () {
    return {
      profile:{},
      EmpRequest:null,
    };
  },
  methods:{
        getProfile() {
      console.log("uid", this.$session.get("uid"));
      axios
        .post("http://localhost:8081/profile", {
          uid: this.$session.get("uid"),
        })
        .then((res) => {
          console.log(res);
          this.profile = res.data.GetProfile;
        })
        .catch((err) => {
          console.log(err);
        });
    },
        fetchEmployeeRequest:function() {
      console.log("Fetching Employee Request");
      axios.get(`http://localhost:8081/fetchemprequest`)
      .then((res) => {
          console.log(res.data.AllRequests)
          this.EmpRequest = res.data.AllRequests;
      })
      .catch((err)=>{
          console.log(err);
      })
    },
  },
  mounted(){
    this.getProfile();
    this.fetchEmployeeRequest();
  }
};
</script>
 
 
<style scoped>
table {
  text-align: center;
}
th {
  padding: 5px;
  border: 1px solid black;
}
td {
  padding: 5px;
  border: 1px solid black;
}
</style>
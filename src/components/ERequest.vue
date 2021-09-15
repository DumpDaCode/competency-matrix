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
      <tr></tr>
      <tr v-for="emprequest in EmpRequest" :key="emprequest.EmployeeName">
        <td>{{ emprequest.EmployeeName }}</td>
        <td>{{ emprequest.DomainType }}</td>
        <td>{{ emprequest.Experience }}</td>
        <td>{{ emprequest.Proficiency }}</td>
        <td>
          <button class="btn btn-primary me-3">Accept</button>
          <button class="btn btn-primary ms-3" @click="editSkills">
            Reject
          </button>
        </td>
        <td>Comment</td>
      </tr>
    </table>

    {{ EmpRequest }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EPASkills",
  data: function() {
    return {
      profile: {},
      modal: false,
      EmpRequest:{},
    }
  },
  methods:{
    fetchEmployeeRequest:function() {
      console.log("Fetching Employee Request");
      axios.get(`http://localhost:8081/fetchemprequest`)
      .then((res) => {
          this.EmpRequest = res.data.AllRequests;
      })
      .catch((err)=>{
          console.log(err);
      })
    },
    getUserProfile() {
      console.log("uid", this.$session.get("uid"));
      axios
        .post("http://localhost:8081/profile", {
          uid: this.$session.get("uid"),
        })
        .then((res) => {
          console.log("res", res);
          this.profile = res.data.GetProfile;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted(){
      this.fetchEmployeeRequest();
      this.getUserProfile();
  },
}
</script>

<style scoped>
.table button {
  background-color: #0d6efd !important;
}
th {
  padding: 5px;
  border: 1px solid black;
}
td {
  padding: 5px;
  border: 1px solid black;
}
.modal-bg {
  background-color: white;
}
</style>

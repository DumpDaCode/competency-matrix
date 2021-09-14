<template>
  <div class="main">
    <h3>Approval status:</h3>
    {{profile}}
    <table class="table mt-3">
      <tr>
        <th>Appraiser Name</th>
        <th>Domain Type</th>
        <th>Skill Name</th>
        <th>Experience</th>
        <th>Proficiency Level</th>
        <th>Status</th>
      </tr>
      <tr v-for="p in profile" :key="p.ID">
        <td>{{ p.Appraiser }}</td>
        <td>{{ p.DomainType }}</td>
        <td>{{ p.SkillName }}</td>
        <td>{{ p.Experience }}</td>
        <td>{{ p.Proficiency }}</td>
        <td v-if="!p.Status">Pending</td>
        <td v-else>Approved</td>
         <td></td>
      </tr>
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
  },
  mounted(){
    this.getProfile()
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
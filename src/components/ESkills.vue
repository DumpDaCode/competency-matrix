<template>
  <div>
    <h3>Add Skills</h3>
    <div v-for="s in skill" :key="s">
      <div class="border p-4 my-3">
        <label>Domain: </label>
        <!-- {{Skills}} -->
        <select class="skilldomain" v-model="selectedDomain">
          <option v-for="i in Skills" :key="i._id" :value="i._id" >{{ i.DomainType }}</option>
        </select>
        <br />
        <label>Skill:</label>
        <!-- {{ Skills }} -->
        <select class="skilltype">
          <option v-for="(i,idx) in filteredSkills" :key="idx" :value="i">{{ i }}</option>
        </select>
        <br />
        <label>Years of Experience: </label>
        <select>
          <option value="0">0</option>
          <option v-for="i in masterset.MaxExperience" :key="i">{{
            i
          }}</option></select
        >
        <br />

        <label>Proficiency Level </label>
        <select>
          <option value="0">0</option>
          <option v-for="i in masterset.MaxProficiency" :key="i">{{
            i
          }}</option></select
        >
      </div>
    </div>
    <button @click="increment" class="btn btn-primary mt-4" type="button">
      Add one more skill
    </button>
    <button type="submit" class="btn btn-primary mt-4 ms-5">Send</button>
        <p>{{Skills.DomainType}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EASkills",
  data: function() {
    return {
      masterset: {},
      skill: 1,
      Skills: {},
      selectedDomain: null,
      filteredSkills: []
};
  },
  methods: {
    increment: function() {
      this.skill = this.skill + 1;
      console.log(this.skill);
    },
    fetchmastersettings: function() {
      axios
        .get("http://localhost:8081/getmastersettings")
        .then((res) => {
          console.log(res.data);
          this.masterset = res.data.MasterSettings;
          console.log(this.masterset);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleChange(e){
      console.log(e.target.value)
      // this.selectedDomain = e.target.value
    },
    findallskills() {
      console.log("Find All Skills called");
      axios
        .get("http://localhost:8081/skills")
        .then((res) => {
          this.Skills = res.data.Allskills;
          console.log(res.data.Allskills);
          this.usrSkills = res.data.Allskills.SkillName;
          // console.log(this.usrSkills);

        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted: function() {
    this.fetchmastersettings();
    this.findallskills();
  },
  watch: {
    selectedDomain: function () {
      // console.log(this.selectedDomain)
      this.filteredSkills = this.Skills.find(s => s._id === this.selectedDomain).SkillName
    }
  }
};
</script>

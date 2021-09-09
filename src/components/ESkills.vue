<template>
  <div>
    <h3>Add Skills</h3>
    <div >
      <div class="border p-4 my-3">
      
        <label>Domain: </label>
        <!-- {{Skills}} -->
        <select class="skilldomain" v-model="selectedDomain" :disabled= "D">
          <option v-for="i in Skills" :key="i._id" :value="i._id">{{
            i.DomainType
          }}</option>
        </select>
        <br />
        <label>Skill Name:</label>
        <!-- {{ Skills }} -->
        <select class="skilltype" v-model="selectedSkillType">
          <option v-for="(i, idx) in filteredSkills" :key="idx" :value="i">{{
            i
          }}</option>
        </select>
        <br />
        <p>
          <label>Years of Experience: </label>

 <input type="range" min="0" :max="masterset.MaxExperience" v-model="value">                                                       

<output>{{value}}</output>
        </p>
        <p>
          <label>Proficiency Level </label>

 <input type="range" min="0" :max="masterset.MaxProficiency" v-model="value1">                                                       

<output>{{value1}}</output>
        </p>
      </div>
    </div>
    <button @click="addToArray(selectedDomain,selectedSkillType, value, value1)" class="btn btn-primary mt-4" type="button">
      Add one more skill
    </button>
    <button type="submit" @click="sendEmpSkills()" class="btn btn-primary mt-4 ms-5">Send</button>
    <p>{{ Skills.DomainType }}</p>
    {{ SkillSet }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EASkills",
  data: function() {
    return {
      masterset: {},
      Skills: {},
      selectedDomain: null,
      filteredSkills: [],
      value:0,
      value1:0,
      selectedSkillType: "",
      SkillSet: [],
      D: false,
    };
  },
  methods: {
    sendEmpSkills(){
      console.log(this.SkillSet)
      console.log("Sending emp details")
      axios.post("http://localhost:8081/sendingempskills",{skillset: this.SkillSet})
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err);
      })
    },
    addToArray(selectedDomain,selectedSkillType,value, value1){
      console.log("Skills", this.Skills)
      const buildSkills = {
        DomainType: this.Skills.find(s => s._id === selectedDomain).DomainType,
        SkillName  : selectedSkillType,
        Experience : value,
        Proficiency : value1
      }
      this.D = true;
      this.SkillSet.push(buildSkills)
      this.selectedSkillType = ""
      this.value = 0
      this.value1 = 0
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
    handleChange(e) {
      console.log(e.target.value);
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
    selectedDomain: function() {
      // console.log(this.selectedDomain)
      this.filteredSkills = this.Skills.find(
        (s) => s._id === this.selectedDomain
      ).SkillName;
    },
  },
};
</script>

<style scoped>
.skilldomain, .skill{
  width: 200px
}
</style>

<template>
  <div>
    <h3>Add Skills</h3>

    <div>
      <div class="border p-4 my-3">
        <label>Domain: </label>
        <!-- {{Skills}} -->
        <select class="skilldomain" v-model="selectedDomain" :disabled="D">
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

          <input
            type="range"
            min="0"
            :max="masterset.MaxExperience"
            v-model="value"
          />

          <output>{{ value }}</output>
        </p>
        <p>
          <label>Proficiency Level </label>

          <input
            type="range"
            min="0"
            :max="masterset.MaxProficiency"
            v-model="value1"
          />

          <output>{{ value1 }}</output>
        </p>
      </div>
    </div>
    <button
      @click="addToArray(selectedDomain, selectedSkillType, value, value1)"
      class="btn btn-primary mt-4"
      type="button"
    >
      Add one more skill
    </button>
    <button
      type="submit"
      @click="sendEmpSkills()"
      class="btn btn-primary mt-4 ms-5"
    >
      Send
    </button>
    <p>{{ Skills.DomainType }}</p>
    <p>skill set</p>
    <!-- {{ EmpRequest }} -->

    <p>profile</p>
    <!-- {{ profile }} -->
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
      value: 0,
      value1: 0,
      selectedSkillType: "",
      //sending employee details and skills to appraiser
      //Main variable use for sending data to the server
      EmpRequest: {},

      SkillDetails: [],
      //
      D: false,
      profile: {},
    };
  },
  methods: {
    addToArray(selectedDomain, selectedSkillType, value, value1) {
      console.log("Skills", this.Skills);


      var buildSkills = {
        SkillName: selectedSkillType,
        Experience: Number.parseInt(value),
        Proficiency: Number.parseInt(value1),
      };
      console.log("Build Skills", buildSkills);

      // DomainType:  this.Skills.find(s=>s._id === this.selectedDomain).DomainType,
      this.D = true;
      console.log("Filtered skills", this.filteredSkills);
      var index = this.filteredSkills.findIndex(
        (s) => s === this.selectedSkillType
      );
      this.filteredSkills.splice(index, 1);
      console.log(this.filteredSkills);
      this.SkillDetails.push(buildSkills);


      console.log("Skill details",this.SkillDetails);
      this.EmpRequest = {
        EmployeeName: this.profile.EmployeeName,
        ShortName: this.profile.ShortName,
        Appraiser: this.profile.Appraiser,
        // "EmployeeName": "Akshay",
        // "ShortName": "akshayma",
        // 'Appraiser': "pranabs",
        "Status": false,
        "SkillSet":[{
          DomainType: this.Skills.find((s) => s._id === this.selectedDomain)
          .DomainType,
        SkillDetail: this.SkillDetails,
        }],
      }
      console.log("SkillSet", this.EmpRequest.SkillSet);
      this.selectedSkillType = "";
      this.value = 0;
      this.value1 = 0;
    },
      sendEmpSkills() {
        console.log("Sending emp details", this.EmpRequest);
        axios
          .post("http://localhost:8081/sendingempskills", this.EmpRequest)
          .then((res) => {
            console.log(res);
            if (res.status == 200) {
              console.log("success", res);
              //handle success here
              this.D = false;
            }
          })
          .catch((err) => {
            console.log(err);
          });
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
  mounted: function() {
    this.fetchmastersettings();
    this.findallskills();
    this.getProfile();
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
.skilldomain,
.skill {
  width: 200px;
}
</style>

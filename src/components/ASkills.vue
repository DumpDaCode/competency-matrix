<template>
  <div>
    <div>Add Skills to Master</div>

    <div class="my-3">
      <div class="my-4">
        <label for="type">Domain Type:</label
        ><input
          style="text-transform:uppercase"
          type="text"
          name="Type"
          id="type"
          v-model="domaintype"
        />
      </div>
      <div class="my-4">
        <label for="name">Skill Name:</label>
        <input
          style="text-transform:uppercase"
          type="text"
          name="Name"
          id="name"
          v-model="skillname"
        />
      </div>
      <hr>
      <p>Selected Skills:</p>
      <p v-if="this.updclcicked == false">Select a skill to Delete</p>
      <span v-for="value, i in skillarray" :key="i"><button @click="arrayUpdate(i)" class="btn btn-danger mx-2">{{value}}</button></span>
      <hr>
    <button @click="increment">Add One more Skill</button>
    </div>

    <div v-if="updclcicked == true">
      <button class="btn btn-primary" @click="addskillstomaster">
        <Plus />
      </button>
    </div>
    <div v-if="updclcicked == false">
      <button type="button" @click="updateSkillHandler">Update Skill</button>
    </div>
    <table class="table mt-3">
      <thead>
        <tr>
          <th scope="col">Type</th>
          <th scope="col">Name</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="skill in Skills" :key="skill.id">
          <td>{{ skill.DomainType }}</td>
          <td>{{ skill.SkillName }}</td>
          <td>
            <button @click="updateSkill(skill)" class="btn btn-primary">
              Edit
            </button>
            <button @click="deleteSkill(skill)" class="btn btn-danger mx-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Plus from "vue-material-design-icons/Plus.vue";
import axios from "axios";
export default {
  name: "skills",
  data() {
    return {
      skillarray: [],
      Skills: [],
      domaintype: "",
      skillname:"",
      updclcicked: true,
      selectedSkill: null,
    };
  },
  methods: {
    arrayUpdate: function(i){
      console.log(i)
      this.skillarray.splice(i,1)
    },
    increment: function() {
      this.skillarray.push(this.skillname.toUpperCase())
      this.skillname = "";
    },
    addskillstomaster() {
      console.log("addskills function called");
      var skill = {
        DomainType: this.domaintype.toUpperCase(),
        SkillName: this.skillarray,
      };
      console.log(skill);
      axios
        .post("http://localhost:8081/addskills", skill)
        .then((res) => {
          console.log(res.data);
          this.skillarray = []
        })
        .catch((e) => {
          console.log(e);
        });
      this.findallskills();
    },

    findallskills() {
      console.log("Find All Skills called");
      axios
        .get("http://localhost:8081/skills")
        .then((res) => {
          console.log(res.data.Allskills);
          this.Skills = res.data.Allskills;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateSkill: function(skill) {
      console.log("Update func called");
      this.updclcicked = false;
      this.domaintype = skill.DomainType;
      this.skillname = "";
      this.selectedSkill = skill;
      this.skillarray = skill.SkillName;
    },
    updateSkillHandler: function() {
      console.log("Update Skill handler func called");
      console.log(this.selectedSkill);
      const SkillUpdate = {
        DomainType: this.domaintype.toUpperCase(),
        SkillName: this.skillarray,
      };
      axios
        .put(
          `http://localhost:8081/updateskill/${this.selectedSkill._id}`,
          SkillUpdate
        )
        .then((res) => {
          console.log(res);
          this.updclcicked = true;
          this.skillarray =[];

      this.domaintype = "";
          this.findallskills();
        })
        .catch((err) => console.log(err));
    },
    deleteSkill: function(skill){
      this.selectedSkill = skill
      console.log("Delete skill func called");
      axios.delete(`http://localhost:8081/deleteskill/${this.selectedSkill._id}`)
      .then(res=>{
        console.log(res);
        this.findallskills();
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  mounted: function() {
    this.findallskills();
  },
  components: {
    Plus,
  },
};
</script>

<style scoped></style>

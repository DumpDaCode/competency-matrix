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
      <p v-for="i in skillarray" :key="i">{{i}}</p>
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
          // this.skillarray = []
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
      this.skillname = skill.SkillName;
      this.selectedSkill = skill;
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
          `http://localhost:8081/updateskills/${this.selectedSkill._id}`,
          SkillUpdate
        )
        .then((res) => {
          console.log(res);

          this.findallskills();
        })
        .catch((err) => console.log(err));
      this.domaintype = "";
    },
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

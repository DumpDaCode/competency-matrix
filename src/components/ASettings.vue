<template>
  <div>
    <div>Settings</div>
    <div class="my-3">
      <div class="my-4">
        <label for="type">Max Experience.:</label
        ><input type="number" name="Type" id="type" v-model="maxexperience" />
      </div>
      <div class="my-4">
        <label for="name">Max Proficiency Level:</label
        ><input type="number" name="Name" id="name" v-model="maxproficiency" />
      </div>
      <div class="my-4">
        <label for="name">Max Team Size:</label
        ><input type="number" name="Name" id="name" v-model="maxteamsize" />
      </div>
    </div>
    <button @click="ASettings" class="btn btn-primary"><Edit /></button>
    <h4 v-if="success" class="mt-4">Master Setting Updated</h4>
  </div>
</template>

<script>
import Edit from "vue-material-design-icons/AccountEdit.vue";
import axios from "axios";
export default {
  data: function() {
    return {
      maxexperience: null,
      maxproficiency: null,
      maxteamsize: null,
      success: false,
    };
  },
  name: "Asettings",
  components: {
    Edit,
  },
  methods: {
    ASettings: function() {
      console.log("Asettings handler func called");
      const MasterSettings = {
        MaxProficiency: Number.parseInt(this.maxproficiency),
        MaxExperience: Number.parseInt(this.maxexperience),
        MaxTeamSize: Number.parseInt(this.maxteamsize),
      };
      axios
        .put("http://localhost:8081/mastersettings", MasterSettings)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.success = true;
            setInterval(() => {
              this.success = false;
            }, 3000);
          }
        })
        .catch((err) => console.log(err));
      this.maxexperience = "";
      this.maxproficiency = "";
      this.maxteamsize = "";
    },
  },
};
</script>

<style scoped></style>

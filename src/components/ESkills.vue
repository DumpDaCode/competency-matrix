<template>
  <div>
    <h3>Add Skills</h3>
    <hr>
    <div v-for="s in skill" :key="s">
      <label>Select Skill Domain: </label>
      <select class="skillDomain">
        <option value="technical">Technical</option>
        <option value="nontechnical">Non-Technical</option> </select
      ><br />
      <label>Select skill:</label>
      <select class="skillDomain">
        <option value="technical">a</option>
        <option value="nontechnical">b</option> </select
      ><br />
      <label>Select Years of Experience: </label>
      <select>
        <option v-for="i in 11" :key="i">{{ i -1 }}</option></select
      >
      <br />

      <label>Proficiency Level </label>
      <select>
        <option v-for="i in 6" :key="i">{{ i -1 }}</option></select
      >
      <br />
      <hr />
    </div>
    <button @click="increment">Add one more skill</button>
    <p>{{ skill }}</p>
    <button>Send</button>
  </div>
</template>

<script>
export default {
  name: "EASkills",
  data: function() {
    return {
      skill: 1,
    };
  },
  methods: {
    increment: function() {
      this.skill = this.skill + 1;
      console.log(this.skill);
    },
  },
};
</script>export default {
  name: "AddSkills",
  data: function() {
    return {
      skill: 1,
    };
  },
  methods: {
    increment: function() {
      this.skill = this.skill + 1;
      console.log(this.skill);
    },
  },
};
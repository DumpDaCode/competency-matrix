<template>
  <div>
      <h3>Add Skills</h3>
      <div v-for="s in skill" :key="s">
        <div class="border p-4 my-3">
          <label>Domain: </label>
          <select class="skillDomain">
            <option value="technical">Technical</option>
            <option value="nontechnical">Non-Technical</option> </select
          ><br />
          <label>Skill:</label>
          <select class="skillDomain">
            <option value="technical">a</option>
            <option value="nontechnical">b</option> </select
          ><br />
          <label>Years of Experience: </label>
          <select>
            <option v-for="i in 11" :key="i">{{ i -1 }}</option></select>
          <br />

          <label>Proficiency Level </label>
          <select>
            <option v-for="i in 6" :key="i">{{ i -1 }}</option></select>
      </div>
    </div>
    <button @click="increment" class="btn btn-primary mt-4" type="button">Add one more skill</button>
    <button type="submit" class="btn btn-primary mt-4 ms-5">Send</button>
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
<template>
  <div class="main">
      <table class="updateSkills">
          <tr><th>Skill Domain</th>
          <th>Skill</th>
          <th>Years of Experience</th>
          <th>Update</th>
          </tr>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>  
            <td><button>Update</button></td>           
        </tr>
      </table>
  </div>
</template>
 
<script>
export default {
    name: "EUSkills",
    data: function(){
    return{}
 }
}
</script>
 
<style scoped>
th{
    padding: 5px;
    border: 1px solid black;
}
td{
    padding: 5px;
    border: 1px solid black;
} 
table{
    text-align: center;
}
</style>
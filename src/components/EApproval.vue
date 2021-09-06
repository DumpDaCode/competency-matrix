<template>
  <div class="main">
      <table>
          <tr>
              <th>Appraiser Name</th>
              <th>Skills</th>
              <th>Experience</th>
              <th>Status</th>
          </tr>
          <tr>
              <td>a</td>
              <td>b</td>
              <td>c</td>
              <td>d</td>
          </tr>
      </table>
  </div>
</template>
 
<script>
export default {
    name: 'EPASkills',
    data: function(){
    return{}
 }
}
</script>
 
 
<style scoped>
 table{
     text-align: center;
 } 
 th{
    padding: 5px;
    border: 1px solid black;
}
td{
    padding: 5px;
    border: 1px solid black;
} 
</style>
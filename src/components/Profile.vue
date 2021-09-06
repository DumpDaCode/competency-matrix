<template>
  <div class="main">
    <h4>Employee Details</h4>
    <p>Name:</p>
    <p>Phone Number:</p>
    <p>Email ID:</p>
    <table class="Skills">
      <tr>
        <th>Skill Domain</th>
        <th>Skill</th>
        <th>Years of Experience</th>
        <th>Approved by</th>
      </tr>
      <tr>
        <td>a</td>
        <td>b</td>
        <td>c</td>
        <td>Akshay</td>
      </tr>
    </table>
    <h4 class="mt-3">Report</h4>
  </div>
</template>

<script>
export default {
  name: "EmpMainPage",
};
</script>

<style>
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

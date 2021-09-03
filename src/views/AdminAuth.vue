<template>
  <div class="main">
    <h4>Admin Login Page</h4><br />
    <div>
      Enter Username: <input type="text" placeholder="Enter Name/ Email" />
    </div><br />
    <div>
      Enter Password:
      <input type="password" placeholder="Enter your Password" />
    </div><br />
    <div><button>Login</button></div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  name: "AdminAuth",
};
</script>

<style scoped>
.main{
position: absolute;
top: 50%;
left: 50%;
transform:translateX(-50%) translateY(-50%);
text-align: center;
border: 1px solid black;
padding: 3rem;
}
</style>

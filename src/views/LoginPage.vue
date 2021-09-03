<template>
  <div>
    <!-- Employee Login -->
    <div v-if="this.switch === true "> 
      <h4>Employee Login Page</h4><br>
      <div>Enter Username: <input type="text" placeholder="Enter Name/ Email"></div><br>
      <div>Enter Password: <input type="password" placeholder="Enter your Password"></div><br>
      <div><button>Login</button></div>
    </div>
    <!-- Admin Login -->
    <div v-if="this.switch === false">
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
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data(){
    return{
      switch : true
    }
  },
}
</script>

<style scoped>

nav{
  text-align: right;
  background-color: whitesmoke;
  font-size: 20px;
  color: black;
  
}

a{
  color: black;
}

a:hover{
  background-color:white;
}
</style>
<template>
  <div>
    <!-- Toggles between admin and employee login page -->
    <div class="switchButton">
      <button @click="toggle"> 
        <span v-if="this.switch === true">Admin</span> 
        <span v-if="this.switch === false">Employee</span> 
      </button>
    </div>
    <!-- Login form -->
    <div class="main">
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
      </div>`
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
  methods:{
    toggle(){
      this.switch = !this.switch
    }
  }
}
</script>

<style scoped>
.main{
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translateX(-50%) translateY(-50%);
  text-align: center;
  border: 1px solid black;
  border-radius: 25px;
  padding: 3rem;
}
.switchButton{
  display: flex;
  justify-content: flex-end;
  margin: 10px 10% 0 0 ;
}
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
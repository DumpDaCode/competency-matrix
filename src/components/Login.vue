<template>
  <div>
    <!-- Login form -->
    <div class="main">
      <!-- Admin Login -->
      <div>
        <h4>Login Page</h4><br />
        <div class="mb-4">
          Enter Username: <input type="text" placeholder="Enter Name/ Email" v-model="username"/>
        </div>
        <div class="mb-4">
          Enter Password:
          <input type="password" placeholder="Enter your Password" v-model="password" id="myInput"/>
        </div><br />
        <input type="checkbox" @click="showPwd">Show Password
        <div><button @click.prevent="login">Login</button></div>
      </div>`
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "LoginPage",
  data(){
    return{
      username: "",
      password: ""
    }
  },
  methods:{
    showPwd(){
      var x = document.getElementById("myInput");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
    login(){
      console.log("Login func called");
      axios.post("http://localhost:8081/login", {
        username: this.username,
        password: this.password,
      })
      .then(res => {
        console.log("res data",res.data);
        if (res.status == 200) {
          this.$session.start()
          this.$session.set("type", res.data.type)
          this.$session.set("uid", res.data.uid)
          if(this.$session.get("type") === "user")
            this.$router.push("/user")
          if(this.$session.get("type") === "admin")
            this.$router.push("/admin")
        }
      })
      .catch(err => {
        if(err == "ldapmdl: Invalid Credentials"){
          alert("Invalid Credentials")
        }
        console.log(err);
      })
    }
  },
  mounted(){
  
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
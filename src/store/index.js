import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    session: {
      type: "user",
      uid: "" 
    },
    flags:{
      toggle: false
    }
  },
  getters:{
    getSessionType(){

    },
    getFlags(){

    }
  },
  mutations: {
    
  },
  actions: {
    login:function(ctx,payload){
      console.log("login function called")
     const LoginDetails={
        username: payload.username,
        password: payload.password,
      }
      console.log(LoginDetails)
      axios.post("http://localhost:8081/login",LoginDetails)
      .then(res=>{
        console.log(res);
    })
      .catch(err=>{
        console.log(err);
      })
    }
  },
  modules: {
  }
})

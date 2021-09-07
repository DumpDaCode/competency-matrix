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
    flags: {
      toggle: false
    }
  },
  getters: {
    getSessionType(){

    },
    getFlags(){

    }
  },
  mutations: {
    setSession(state, payload){
      state.session.type = payload.type
      state.session.uid = payload.uid
    }
  },
  actions: {
    login: function (ctx, payload) {
      const LoginDetails = {
        username: payload.username,
        password: payload.password,
      }
      console.log(LoginDetails)
      axios.post("http://localhost:8081/login", LoginDetails)
      .then(res => {
        if (res.status == 200) {
          ctx.commit("setSession", res.body)
          this.$router.push('user')
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  modules: {
  }
})

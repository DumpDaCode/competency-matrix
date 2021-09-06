import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    session: {
      type: "admin",
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
  },
  modules: {
  }
})

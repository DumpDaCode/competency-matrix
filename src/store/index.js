import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    session: {
      type: "",
      uid: ""
    },
    flags: {
      toggle: false
    }
  },
  getters: {
    getSessionType(){
      return this.state.session.type
    },
    getFlags(){

    }
  },
  mutations: {
    setSession(state, payload){
      state.session.type = payload.type.toLowerCase()
      state.session.uid = payload.uid.toLowerCase()
    }
  },
  actions: {
  },
  modules: {
  }
})

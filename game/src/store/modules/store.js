import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Login_skin: JSON.parse(localStorage.getItem('Login_skin'))
  },
  mutations: {
    initSkin(state,{payload}){
      state.Login_skin = payload
    }
  },
  actions: {
    initSkin: ({commit})=>{
      commit('initSkin')
    }
  }
})

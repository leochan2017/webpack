import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// import VuexPersistence from 'vuex-persistedstate'
// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })

export default new Vuex.Store({
  state: {},
  mutations: {
    setParam(state, payload) {
      for (let i in payload) state[i] = payload[i]
    }
  },
  getters: {},
  actions: {}
  // plugins: [vuexLocal]
})
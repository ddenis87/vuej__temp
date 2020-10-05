import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeStackStream: {}, // [['b': ['0','0']]],
    storeStack: {}
  },
  mutations: {
    setStoreStackStream(state, arrStack) {
      state.storeStackStream = JSON.parse(arrStack);
    },
    setStoreStack(state, arrStack) {
      state.storeStack = arrStack
    }
  },
  actions: {
  },
  modules: {
  }
})

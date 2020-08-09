import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeStack: {} // [['b': ['0','0']]],
  },
  mutations: {
    setStoreStack(state, arrStack) {
      state.storeStack = JSON.parse(arrStack);
    }
  },
  actions: {
  },
  modules: {
  }
})

import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 50
  },
  // Unlike counterColor, the counter must change in all components.
  mutations: {
    increase(state) {
      state.counter =+ 10
    }
  },
  // These can access to a API or Data Bases
  actions: {
    // 
    actionIncrease({}) {
      
    }
  },
  modules: {
  }
})

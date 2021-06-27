import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 50
  },
  // Unlike counterColor, the counter must change in all components.
  mutations: {
    increase(state, payload) {
      state.counter += payload
    },
    decrease(state, payload) {
      state.counter -= payload
    }
  },
  // These can access to a API or Data Bases
  actions: {

    // actionIncrease({commit}) {
    //   commit('increase')
    // },
    // actionDecrease({commit}) {
    //   commit('decrease')
    // },
    actionButton({commit}, object) {
      if (object.state) {
        commit('increase',object.number)
      }
      else {
        commit('decrease',object.number)
      } 
      
    }
  },
  modules: {
  }
})

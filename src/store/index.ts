import { createStore } from 'vuex'

interface State {
  user: {
    username?: string
    url?: string
  }
}

const store = createStore<State>({
  state() {
    return {
      user: {}
    }
  },

  mutations: {
    setUser(state, data) {
      state.user = data
    }
  }
})

export default store

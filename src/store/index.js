import Vuex from 'vuex' // 引入 vuex
import Vue from 'vue'
import work from './modules/work'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    rest (state) {
      state.count = 0
    }
  },
  actions: {
    increment (state) {
      state.commit('increment')
    },
    rest (state) {
      state.commit('rest')
    }
  },
  getters: {
    count: state => state.count
  },
  modules: {
  	work,
  }
})

// initial state
const state = {
  page: null
}

// getters
const getters = {
	page:state => state.page 
	
}

// actions
const actions = {
	setPage(state,page) {
		state.commit("setPage",page)
	}
}

// mutations
const mutations = {
	setPage(state,page) {
		state.page = page
	}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
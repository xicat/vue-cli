// initial state
const state = {
  page: null,
  menu: null
};

// getters
const getters = {
  page: state => state.page,
  menu: state => state.menu
};

// actions
const actions = {
  setPage(state, page) {
    state.commit("setPage", page);
  },
  setMenu(state, menu) {
    state.commit("setMenu", menu);
  }
};

// mutations
const mutations = {
  setPage(state, page) {
    state.page = page;
  },
  setMenu(state, menu) {
    state.menu = menu;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

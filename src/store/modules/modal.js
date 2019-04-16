// initial state
const state = {
  modals: [],
  zIndex: 0,
  currId: 0,
  activeIndex: 2000
};

// getters
const getters = {
  modals: state => state.modals,
  zIndex: state => state.zIndex,
  currId: state => state.currId
};

// actions
const actions = {
  newModal(state, modal) {
    state.commit("addModal", modal);
  },
  delModal(state, id) {
    state.commit("delModal", id);
  },
  showModal(state, id) {
    state.commit("showModal", id);
  },
  hideModal(state, id) {
    state.commit("hideModal", id);
  },
  toTopModal(state, id) {
    state.commit("toTopModal", id);
  }
};

// mutations
const mutations = {
  newModal(state, modal) {
    state.zIndex++;
    state.currId++;
    modal.zIndex = state.zIndex;
    modal.currId = state.currId;

    state.modals.push(modal);
  },
  delModal(state, id) {
    state.modals = c;
  },
  showModal(state, id) {
    let modal = state.modals.filter(item => item.id === id);
  },
  hideModal(state, id) {
    let modal = state.modals.filter(item => item.id === id);
  },
  toTopModal(state, id) {}
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

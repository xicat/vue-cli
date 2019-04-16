// initial state
const state = {
  modals: [],
  zIndex: 1,
  currId: 1,
  activeId: 1,
  activezIndex: 2000
};

// getters
const getters = {
  modals: state => state.modals,
  zIndex: state => state.zIndex,
  currId: state => state.currId,
  activeId: state => state.activeId
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
    modal.show = true;
    state.activeId = modal.currId;
    state.modals.push(modal);
  },
  delModal(state, id) {
    let modal = state.modals.find(item => item.id === id);
    modal.id = null;
    modal = null;
    state.modals = state.modals.find(item => !item);
  },
  showModal(state, id) {
    let modal = state.modals.find(item => item.id === id);
    modal.show = true;
    state.activeId = id;
  },
  hideModal(state, id) {
    let modal = state.modals.find(item => item.id === id);
    modal.show = false;
    state.activeId = null;
  },
  toTopModal(state, id) {
    state.activeId = id;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

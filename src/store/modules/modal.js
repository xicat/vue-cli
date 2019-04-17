// initial state
const state = {
  modals: [],
  zIndex: 1,
  currId: 1,
  activeId: 1
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
    state.commit("newModal", modal);
  },
  delModal(state, modal) {
    state.commit("delModal", modal);
  },
  showModal(state, modal) {
    state.commit("showModal", modal);
  },
  maxModal(state, modal, flag) {
    state.commit("maxModal", modal, flag);
  },
  hideModal(state, modal) {
    state.commit("hideModal", modal);
  },
  toTopModal(state, modal) {
    state.commit("toTopModal", modal);
  }
};

// mutations
const mutations = {
  newModal(state, modal) {
    modal.zIndex = state.zIndex++;
    modal.currId = state.currId++;
    modal.show = true;
    state.activeId = modal.currId;
    state.modals.push(modal);
  },
  delModal(state, modal) {
    state.modals = state.modals.filter(item => item.id !== modal.id);
    modal = null;
  },
  showModal(state, modal) {
    modal.show = true;
    state.activeId = modal.id;
  },
  hideModal(state, modal) {
    modal.show = false;
    state.activeId = null;
  },
  toTopModal(state, modal) {
    state.activeId = modal.id;
    modal.zIndex = state.zIndex++;
  },
  maxModal(state, modal, flag) {
    modal.max = flag;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

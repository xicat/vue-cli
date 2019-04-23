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
  delModal(state, id) {
    state.commit("delModal", id);
  },
  showModal(state, id) {
    state.commit("showModal", id);
  },
  toggleModal(state, id) {
    state.commit("toggleModal", id);
  },
  maxModal(state, { id, flag }) {
    state.commit("maxModal", { id, flag });
  },
  hideModal(state, id) {
    state.commit("hideModal", id);
  },
  toTopModal(state, id) {
    state.commit("toTopModal", id);
  },
  refreshModal(state, { id, style }) {
    state.commit("refreshModal", { id, style });
  }
};

// mutations
const mutations = {
  newModal(state, modal) {
    state.currId++;
    state.zIndex++;
    state.activeId = modal.currId;
    state.modals.push(modal);
  },
  delModal(state, id) {
    let modal = getModalById(id);
    if (!modal) {
      return;
    }
    modal = null;
    state.modals = state.modals.filter(item => !item);
  },
  showModal(state, id) {
    let modal = getModalById(id);
    if (!modal) {
      return;
    }
    modal.show = true;
    state.activeId = modal.id;
  },
  hideModal(state, id) {
    let modal = getModalById(id);
    if (!modal) {
      return;
    }
    modal.show = false;
  },
  toggleModal(state, id) {
    let modal = getModalById(id);
    if (!modal) {
      return;
    }
    modal.show = !modal.show;
  },
  toTopModal(state, id) {
    let modal = getModalById(id);
    if (!modal) {
      return;
    }
    state.activeId = modal.id;
    modal.zIndex = state.zIndex++;
  },
  maxModal(state, { id, flag }) {
    let modal = getModalById(id);
    if (!modal) {
      return;
    }
    modal.isMax = flag;
  },
  refreshModal(state, { id, style }) {
    let modal = getModalById(id);
    if (!modal) {
      return;
    }
    modal.win.style = style;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

function getModalById(id) {
  return state.modals.find(modal => modal.id == id);
}

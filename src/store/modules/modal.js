// initial state
const state = {
  modals: [],
  currId: 1,
  activeId: 1
};

// getters
const getters = {
  modals: state => state.modals,
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
    state.commit("toTopModal", id);
  },
  toggleModal(state, modal) {
    if (modal.show) {
      //当前正显示
      state.commit("hideModal", modal.id);
    } else {
      state.commit("showModal", modal.id);
      state.commit("toTopModal", modal.id);
    }
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
    modal.id = state.currId;
    state.activeId = modal.id;
    state.modals.push(modal);
  },
  delModal(state, id) {
    let modal = getModalById(id);
    let index = getIndexById(id);
    if (!modal) {
      return;
    }
    modal = null;
    state.modals.splice(index, 1);
  },
  showModal(state, id) {
    let modal = getModalById(id);
    if (!modal) {
      return;
    }
    modal.show = true;
  },
  hideModal(state, id) {
    let modal = getModalById(id);
    if (!modal) {
      return;
    }
    modal.show = false;
    if (state.activeId == id) {
      state.activeId = null;
    }
  },

  toTopModal(state, id) {
    let modal = getModalById(id);
    let index = getIndexById(id);
    if (!modal) {
      return;
    }
    state.modals.push(modal);
    state.modals.splice(index, 1);
    state.activeId = id;
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
    modal.win.style = Object.assign({}, style);
    style = null;
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
function getIndexById(id) {
  let index = -1;
  state.modals.forEach((modal, i) => {
    if (modal.id == id) {
      index = i;
      return false;
    }
  });
  return index;
}

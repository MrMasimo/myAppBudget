import Vue from 'vue';

const budgetData = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some comment",
        id: 1,
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "Some out comment",
        id: 2,
      },
    },
    show: "ALL",
  },
  getters: {
    budget: ({ list, show }) => {
      if (show === "ALL") return list;
      else {
        let newList = Object.values(list).reduce((acc, item) => {
          if (item.type == show) acc[item.id] = item;
          return acc;
        }, {});
        return newList;
      }
    },

    totalBalance: ({ list }) =>
      Object.values(list).reduce((acc, item) => acc + item.value, 0),
  },
  mutations: {
    ADD_ITEM(state, newItem) {
      Vue.set(state.list, newItem.id, newItem);
    },
    DELETE_ITEM(state, id) {
      Vue.delete(state.list, id);
    },
    SORT_ITEM(state, view) {
      state.show = view;
    }
  },
  actions: {
    onAddItem({ commit }, data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      };
      commit("ADD_ITEM", newObj);
    },
    onDeleteItem({ commit }, id) {
      commit("DELETE_ITEM", id);
    },
    onSort({ commit }, view) {
      commit("SORT_ITEM", view);
    }
  },
};

export default budgetData;
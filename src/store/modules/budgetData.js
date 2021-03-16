const budgetData = {
  namespace: true,
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
  },
  getters: {
    budget: ({ list }) => list
  },
  muthations: {},
  actions: {},
};

export default budgetData;
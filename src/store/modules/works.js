import fetch from 'node-fetch';

export const works = {
  namespaced: true,
  state: {
    items: [],
    loading: true,
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    finishLoading(state) {
      state.loading = false;
    },
  },
  actions: {
    async getItems({ commit }) {
      const url = `${process.env.VUE_APP_CMS_API_ENDPOINT}/works`;
      const response = await fetch(url, {
        headers: { 'X-API-KEY': process.env.VUE_APP_CMS_X_API_KEY },
      });
      const json = await response.json();
      const items = json.contents.map((item) => ({
        id: item.id,
        title: item.title || null,
        thumbnail: item.thumbnail ? item.thumbnail.url : null,
        category: item.category ? item.category.name : null,
      }));
      commit('setItems', items);
      commit('finishLoading');
    },
  },
};

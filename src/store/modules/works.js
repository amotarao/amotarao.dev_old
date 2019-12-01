import fetch from 'node-fetch';

export const works = {
  namespaced: true,
  state: {
    items: [],
    loaded: false,
    getting: false,
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    startGet(state) {
      state.getting = true;
    },
    finishGet(state) {
      state.getting = false;
    },
    finishLoad(state) {
      state.loaded = true;
    },
  },
  actions: {
    async getItems({ state, commit }) {
      if (state.getting) {
        return;
      }
      commit('startGet');
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
      commit('finishGet');
      commit('finishLoad');
    },
  },
};

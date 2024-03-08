import { createStore } from "vuex";
import axios from "axios";
const BASE_URL = "https://capstoneproject-p08x.onrender.com/";

export default createStore({
  state: {
    agents: [],
  },
  getters: {},
  mutations: {
    setAgents(state, data) {
      state.agents = data;
    },
  },
  actions: {
    async getAgents({ commit }) {
      let { data } = await axios.get(BASE_URL + "agents");
      console.log(data.results);
      commit("setAgents", data.results);
    },
  },
  modules: {},
});

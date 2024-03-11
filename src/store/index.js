import { createStore } from "vuex";
import axios from "axios";
const BASE_URL = "https://capstoneproject-p08x.onrender.com/";

export default createStore({
  state: {
    agents: [],
    agent: [],
  },
  getters: {},
  mutations: {
    setAgents(state, data) {
      state.agents = data;
    },
    setAgent(state, data) {
      state.agent = data;
    },
  },
  actions: {
    async getAgents({ commit }) {
      let { data } = await axios.get(BASE_URL + "agents");
      console.log(data.results);
      commit("setAgents", data.results);
    },
    async getAgent({ commit }, agentID) {
      let { data } = await axios.get(BASE_URL + "agents/" + agentID);
      console.log(data.result);
      commit("setAgent", data.result);
    },
  },
  modules: {},
});

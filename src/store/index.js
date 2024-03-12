import { createStore } from "vuex";
import axios from "axios";
const BASE_URL = "https://capstoneproject-p08x.onrender.com/";

export default createStore({
  state: {
    agents: [],
    agent: [],
    admin:[]
  },
  getters: {},
  mutations: {
    setAgents(state, data) {
      state.agents = data;
    },
    setAgent(state, data) {
      state.agent = data;
    },
    setDeleteAgent(state, data) {
      state.agent = data;
    },
    setUpdateAgent(state, data) {
      state.agent = data;
    },
    setAdminAgents(state, data) {
      state.admin = data;
    },
    setAddAgent(state, data) {
      state.agent = data;
    }
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
    async deleteAgent({commit}, agentID) {
      await axios.delete(BASE_URL + "agents/deleteAgent/" + agentID)
      commit("setDeleteAgent");
      window.location.reload()
    },
    async updateAgent({commit}, update) {
      await axios.patch(BASE_URL + "agents/updateAgent/" + update.agentID, update)
      commit("setUpdateAgent");
      window.location.reload()
    },
    async getAdminAgents({ commit }) {
      let { data } = await axios.get(BASE_URL + "agents");
      console.log(data.results);
      commit("setAdminAgents", data.results);
    },
    async addAgent({commit}, newAgent) {
      console.log(newAgent);
      let { data } = await axios.post(BASE_URL + "agents/addAgent", newAgent);
      console.log(data);
      commit("setAddAgent", data.results);
      window.location.reload()
    },
  },
  modules: {},
});

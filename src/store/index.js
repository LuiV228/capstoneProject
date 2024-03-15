import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";
const BASE_URL = "https://capstoneproject-p08x.onrender.com/";
// axios.defaults.withCredentials = true

export default createStore({
  state: {
    agents: [],
    agent: [],
    adminAgents:[],
    adminUsers:[],
    loggedIn: false
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
      state.adminAgents = data;
    },
    setAddAgent(state, data) {
      state.agent = data;
    },
    setLogin(state, data) {
      state.loggedIn = data;
    },
    setAdminUsers(state, data) {
      state.adminUsers = data;
    },
    setAddUser(state, data) {
      state.user = data;
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
    async login({commit}, user) {
      console.log(user);
      let { data } = await axios.post(BASE_URL + "users/login", user);
      console.log(data);
      // eslint-disable-next-line
      $cookies.set('jwt', data.token)
      commit("setLogin", true);
      alert(data.msg)
      router.push({ name: "accessSpinner" });
    },
    async getAdminUsers({ commit }) {
      let { data } = await axios.get(BASE_URL + "users");
      console.log(data.results);
      commit("setAdminUsers", data.results);
    },
    async addUser({commit}, newUser) {
      console.log(newUser);
      let { data } = await axios.post(BASE_URL + "users/addUser", newUser);
      console.log(data);
      commit("setAddUser", data.results);
      alert(data.msg)
      router.push({ name: "login" });
    },
  },
  modules: {},
});

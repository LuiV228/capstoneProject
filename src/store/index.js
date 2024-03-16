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
    setLogin(state, data) {
      state.loggedIn = data;
    },
    setAdminAgents(state, data) {
      state.adminAgents = data;
    },
    setAdminUsers(state, data) {
      state.adminUsers = data;
    },
    setAddAgent(state, data) {
      state.agent = data;
    },
    setDeleteAgent(state, data) {
      state.agent = data;
    },
    setUpdateAgent(state, data) {
      state.agent = data;
    },
    setAddUser(state, data) {
      state.user = data;
    },
    setDeleteUser(state, data) {
      state.user = data;
    },
    setUpdateUser(state, data) {
      state.user = data;
    },
  },
  actions: {
    async getAgents({ commit }) {
      let { data } = await axios.get(BASE_URL + "agents");
      commit("setAgents", data.results);
    },
    async getAgent({ commit }, agentID) {
      let { data } = await axios.get(BASE_URL + "agents/" + agentID);
      commit("setAgent", data.result);
    },
    async login({commit}, user) {
      let { data } = await axios.post(BASE_URL + "users/login", user);
      // eslint-disable-next-line
      $cookies.set('jwt', data.token)
      commit("setLogin", true);
      alert(data.msg)
      router.push({ name: "accessSpinner" });
    },
    async getAdminAgents({ commit }) {
      let { data } = await axios.get(BASE_URL + "agents");
      commit("setAdminAgents", data.results);
    },
    async getAdminUsers({ commit }) {
      let { data } = await axios.get(BASE_URL + "users");
      commit("setAdminUsers", data.results);
    },
    async addAgent({commit}, newAgent) {
      let { data } = await axios.post(BASE_URL + "agents/addAgent", newAgent);
      commit("setAddAgent", data.results);
      alert("Agent has been added successfully")
      window.location.reload()
    },
    async deleteAgent({commit}, agentID) {
      await axios.delete(BASE_URL + "agents/deleteAgent/" + agentID)
      commit("setDeleteAgent");
      alert("Agent has been deleted successfully")
      window.location.reload()
    },
    async updateAgent({commit}, update) {
      await axios.patch(BASE_URL + "agents/updateAgent/" + update.agentID, update)
      commit("setUpdateAgent");
      alert("Agent's details have been updated successfully")
      window.location.reload()
    },
    async addUser({commit}, newUser) {
      let { data } = await axios.post(BASE_URL + "users/addUser", newUser);
      commit("setAddUser", data.results);
      alert("User has been added successfully")
      window.location.reload()
    },
    async deleteUser({commit}, userID) {
      await axios.delete(BASE_URL + "users/deleteUser/" + userID)
      commit("setDeleteUser");
      alert("User has been deleted successfully")
      window.location.reload()
    },
    async updateUser({commit}, update) {
      await axios.patch(BASE_URL + "users/updateUser/" + update.userID, update)
      commit("setUpdateUser");
      alert("User's details have been updated successfully")
      window.location.reload()
    },
  },
  modules: {},
});

import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";
import { applyToken } from "@/service/AuthenticationUser.js";
const BASE_URL = "http://localhost:3000/";
axios.defaults.withCredentials = true;

export default createStore({
  state: {
    agents: [],
    agent: [],
    adminAgents: [],
    adminUsers: [],
    loggedIn: false,
    emissaries: [],
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
    setEmissaries(state, data) {
      state.emissaries = data;
    },
    addEmissaryToCart(state, emissary) {
      state.emissaries.push(emissary);
    },
  },
  actions: {
    async getAgents(context) {
      let { results } = await (await fetch(`${BASE_URL}agents`)).json();
      context.commit("setAgents", results);
    },
    async getAgent(context, payload) {
      console.log(payload);
      let { result } = await (
        await fetch(`${BASE_URL}agents/${payload.agentID}`)
      ).json();
      console.log(result);
      context.commit("setAgent", result);
    },
    // async getAgent({ commit }, agentID) {
    //   let { data } = await axios.get(BASE_URL + "agents/" + agentID);
    //   commit("setAgent", data.result);
    // },
    async login(context, user) {
      let { token, msg } = await (
        await fetch(`${BASE_URL}users/login`, {
          method: "POST",
          body: JSON.stringify(user),

          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();
      // eslint-disable-next-line
      $cookies.set("jwt", token);
      context.commit("setLogin", true);
      applyToken(token);
      alert(msg);
      router.push({ name: "accessSpinner" });
    },
    async getAdminAgents(context) {
      let { results } = await (await fetch(`${BASE_URL}agents`)).json();
      context.commit("setAdminAgents", results);
    },
    async getAdminUsers(context) {
      let { results } = await (await fetch(`${BASE_URL}users`)).json();
      console.log(results);
      context.commit("setAdminUsers", results);
    },
    async addAgent({ commit }, newAgent) {
      try {
        const response = await fetch(BASE_URL + "agents/addAgent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newAgent),
        });
        const data = await response.json();
        commit("setAddAgent", data.results);
        alert("Agent has been added successfully");
        window.location.reload();
      } catch (error) {
        console.error("Error adding agent:", error);
        // Handle error as needed
      }
    },

    async deleteAgent({ commit }, agentID) {
      try {
        await fetch(BASE_URL + "agents/deleteAgent/" + agentID, {
          method: "DELETE",
        });
        commit("setDeleteAgent");
        alert("Agent has been deleted successfully");
        window.location.reload();
      } catch (error) {
        console.error("Error deleting agent:", error);
        // Handle error as needed
      }
    },

    async updateAgent({ commit }, update) {
      try {
        await fetch(BASE_URL + "agents/updateAgent/" + update.agentID, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(update),
        });
        commit("setUpdateAgent");
        alert("Agent's details have been updated successfully");
        window.location.reload();
      } catch (error) {
        console.error("Error updating agent:", error);
        // Handle error as needed
      }
    },

    async addUser({ commit }, newUser) {
      try {
        const response = await fetch(BASE_URL + "users/addUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
        const data = await response.json();
        commit("setAddUser", data.results);
        alert("User has been added successfully");
        window.location.reload();
      } catch (error) {
        console.error("Error adding user:", error);
        // Handle error as needed
      }
    },

    async addUserAdmin({ commit }, newUserAdmin) {
      try {
        const response = await fetch(BASE_URL + "users/addUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUserAdmin),
        });
        const data = await response.json();
        commit("setAddUserAdmin", data.results);
        alert("User has been added successfully");
        window.location.reload();
      } catch (error) {
        console.error("Error adding admin user:", error);
        // Handle error as needed
      }
    },

    async deleteUser({ commit }, userID) {
      try {
        await fetch(BASE_URL + "users/deleteUser/" + userID, {
          method: "DELETE",
        });
        commit("setDeleteUser");
        alert("User has been deleted successfully");
        window.location.reload();
      } catch (error) {
        console.error("Error deleting user:", error);
        // Handle error as needed
      }
    },

    // async updateUser({ commit }, update) {
    //   await axios.patch(BASE_URL + "users/updateUser/" + update.userID, update);
    //   commit("setUpdateUser");
    //   alert("User's details have been updated successfully");
      // window.location.reload();
    // },
    async updateUser({ commit }, update) {
      try {
        const response = await fetch(
          `${BASE_URL}users/updateUser/${update.userID}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(update),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update user");
        }

        commit("setUpdateUser", update);
        alert("User's details have been updated successfully");
        window.location.reload();
      } catch (error) {
        console.error("Error updating user:", error);
        // Handle error appropriately, e.g., show an error message to the user
        alert("Failed to update user. Please try again later.");
      }
    },
    async getEmissaries(context) {
      try {
        const response = await fetch(BASE_URL + "emissaries");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        context.commit("setEmissaries", data.results);
      } catch (error) {
        console.error('Error fetching emissaries:', error);
        context.commit("setEmissaries"); // Clear emissaries on error
        // Optionally, you can show a message to the user indicating the error
      }
    },
    async addEmissaryToCart({ commit }, newEmissary) {
      try {
        commit("addEmissaryToCart", newEmissary);
        console.log("Emissary added to cart:", newEmissary);
      } catch (error) {
        console.error('Error adding emissary to cart:', error);
      }
    },
  }
});

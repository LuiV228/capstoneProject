<template>
  <AddUser />
  <br />
  <div class="container-fluid"></div>
  <br />
  <table class="table table-bordered border-primary">
    <thead class="table-dark">
      <tr>
        <th scope="col">User Id</th>
        <th scope="col">User First Name</th>
        <th scope="col">User Last Name</th>
        <th scope="col">User Role</th>
        <th scope="col">User Email</th>
        <th scope="col">User contact</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in $store.state.adminUsers" :key="user">
        <td class="col-2">{{ user.userID }}</td>
        <td class="col-2">{{ user.userFirstName }}</td>
        <td class="col-2">{{ user.userLastName }}</td>
        <td class="col-3">{{ user.userRole }}</td>
        <td class="col-4">{{ user.userEmail }}</td>
        <td class="col-5">{{ user.userContact }}</td>
        <td class="col-6">
          <button type="submit" class="btn btn-secondary" @click="deleteUser(user.userID)">Remove User</button>
        </td>
        <td class="col-7">
          <UpdateUser :user="userID" />
        </td>
      </tr>
    </tbody>
  </table>
  <AddAgent />
  <br />
  <table class="table table-bordered border-primary">
    <thead class="table-dark">
      <tr>
        <th scope="col">Agent Id</th>
        <th scope="col">Agent Portfolio</th>
        <th scope="col">Agent Codename</th>
        <th scope="col">Agent Role</th>
        <th scope="col">Agent Role Description</th>
        <th scope="col">Agent Service Fee</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="agent in $store.state.adminAgents" :key="agent">
        <td class="col-2">{{ agent.agentID }}</td>
        <td scope="row" class="col-1">
          <img :src="agent.agentPortfolio" class="image" />
        </td>
        <td class="col-2">{{ agent.agentCodeName }}</td>
        <td class="col-3">{{ agent.agentRole }}</td>
        <td class="col-4">{{ agent.agentRoleDescription }}</td>
        <td class="col-5">R{{ agent.agentPrice }}</td>
        <td class="col-6">
          <button @click="deleteAgent(agent.agentID)">Remove Agent</button>
        </td>
        <td class="col-7">
          <button @click="updateAgent(agent.agentID)">Edit Agent</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import AddUser from "../components/AddUser.vue";
import AddAgent from "@/components/AddAgent.vue";
import UpdateUser from "@/components/UpdateUser.vue";

export default {
  components: {
    AddUser,
    AddAgent,
    UpdateUser
  },
  data() {
    return {
      agentID: "",
      agentCodeName: "",
      agentPortfolio: "",
      agentRole: "",
      agentRoleDescription: "",
      agentPrice: "",
      userFirstName: "",
      userLastName: "",
      userContact: "",
      userRole: "",
      userEmail: "",
      userPassword: "",
      selectedUserID: null // Initialize selectedUserID with a default value or fetch it from your state
    };
  },
  computed: {
    getAdminAgents() {
      return this.$store.dispatch("getAdminAgents");
    },
    getAdminUsers() {
      return this.$store.dispatch("getAdminUsers");
    },
  },
  methods: {
    addAgent() {
      this.data = {
        agentID: this.agentID,
        agentPortfolio: this.agentPortfolio,
        agentCodeName: this.agentCodeName,
        agentRole: this.agentRole,
        agentRoleDescription: this.agentRoleDescription,
        agentPrice: this.agentPrice,
      };
      this.$store.dispatch("addAgent", this.data);
    },
    deleteAgent(agentID) {
      this.$store.dispatch("deleteAgent", agentID);
    },
    updateAgent(id) {
      let update = {
        agentID: id,
        agentCodeName: this.agentCodeName,
        agentPortfolio: this.agentPortfolio,
        agentRole: this.agentRole,
        agentRoleDescription: this.agentRoleDescription,
        agentPrice: this.agentPrice,
      };
      this.$store.dispatch("updateAgent", update);
    },
    deleteUser(userID) {
      this.$store.dispatch("deleteUser", userID);
    },
    updateUser(id) {
      let update = {
        userID: id,
        userFirstName: this.userFirstName,
        userLastName: this.userLastName,
        userEmail: this.userEmail,
        userPassword: this.userPassword,
        userContact: this.userContact,
        userRole: this.userRole,
      };
      this.$store.dispatch("updateUser", update);
    },
  },
  mounted() {
    this.getAdminUsers;
    this.getAdminAgents;
  },
};
</script>

<style scoped>
.image {
  width: 100px;
  height: 100px;
}

th {
  vertical-align: middle;
}
td {
  vertical-align: middle;
}
</style>

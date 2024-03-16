<template>
  <input type="text" placeholder="First Name" v-model="userFirstName" />
  <input type="text" placeholder="Last Name" v-model="userLastName" />
  <input type="text" placeholder="Role" v-model="userRole" />
  <input type="text" placeholder="Email" v-model="userEmail" />
  <input type="password" placeholder="Password" v-model="userPassword" />
  <input type="text" placeholder="Contact" v-model="userContact" />
  <div class="container-fluid">
    <button class="add" @click="addUserAdmin()">Add User</button>
  </div>
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
          <button  @click="deleteUser(user.userID)">Remove User</button>
        </td>
        <td class="col-7"><button @click="updateUser(user.userID)">Edit User</button></td>
      </tr>
    </tbody>
  </table>
  <br />
  <input type="number" placeholder="Agent Id" v-model="agentID" />
  <input type="text" placeholder="Agent Portfolio" v-model="agentPortfolio" />
  <input type="text" placeholder="Agent Codename" v-model="agentCodeName" />
  <input type="text" placeholder="Agent Role" v-model="agentRole" />
  <input
    type="text"
    placeholder="Agent Role Description"
    v-model="agentRoleDescription"
  />
  <input type="number" placeholder="Agent Service Fee" v-model="agentPrice" />
  <div class="container-fluid">
    <button class="add" @click="addAgent()">Add Agent</button>
  </div>
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
export default {
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
      this.data = { agentID: this.agentID, agentPortfolio: this.agentPortfolio, agentCodeName: this.agentCodeName, agentRole: this.agentRole, agentRoleDescription: this.agentRoleDescription, agentPrice: this.agentPrice }
      this.$store.dispatch('addAgent', this.data);
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
    addUserAdmin() {
      this.data = { userFirstName: this.userFirstName, userLastName: this.userLastName, userContact: this.userContact, userRole: this.userRole, userEmail: this.userEmail, userPassword: this.userPassword }
      this.$store.dispatch('addUserAdmin', this.data);
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

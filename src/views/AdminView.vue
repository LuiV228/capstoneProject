<template>
  <input type="text" placeholder="First Name" v-model="userFirstName" />
  <input type="text" placeholder="Last Name" v-model="userLastName" />
  <input type="text" placeholder="Role" v-model="userRole" />
  <input type="text" placeholder="Email" v-model="userEmail" />
  <input type="text" placeholder="Password" v-model="userPassword" />
  <input type="number" placeholder="Contact" v-model="userContact" />
  <div class="container-fluid">
    <button class="add" @click="addUser()">Add User</button>
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
          <button>Remove User</button>
        </td>
        <td class="col-7"><button>Edit User</button></td>
      </tr>
    </tbody>
  </table>
  <br />
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
    getAdminUsers() {
      return this.$store.dispatch("getAdminUsers");
    },
    getAdminAgents() {
      return this.$store.dispatch("getAdminAgents");
    },
  },
  methods: {
    deleteAgent(agentID) {
      this.$store.dispatch("deleteAgent", agentID);
    },
    addAgent() {
      return this.$store.dispatch("addAgent", this.$data);
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
    addUser() {
      return this.$store.dispatch("addUser", this.$data);
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

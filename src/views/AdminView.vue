<template>
  <input type="number" placeholder="ID" v-model="agentID">
  <input type="text" placeholder="Image" v-model="agentPortfolio">
  <input type="text" placeholder="Codename" v-model="agentCodeName">
  <input type="text" placeholder="Role" v-model="agentRole">
  <input type="text" placeholder="Description" v-model="agentRoleDescription">
  <input type="number" placeholder="Service Fee" v-model="agentPrice">
  <table class="table table-bordered border-primary">
    <thead class="table-dark">
      <tr>
        <th scope="col">Agent Portfolio</th>
        <th scope="col">Agent Codename</th>
        <th scope="col">Agent Role</th>
        <th scope="col">Agent Role Description</th>
        <th scope="col">Agent Service Fee</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="agent in $store.state.admin" :key="agent">
        <td scope="row" class="col-1">
          <img :src="agent.agentPortfolio" class="image" />
        </td>
        <td class="col-2">{{ agent.agentCodeName }}</td>
        <td class="col-3">{{ agent.agentRole }}</td>
        <td class="col-4">{{ agent.agentRoleDescription }}</td>
        <td class="col-5">R{{ agent.agentPrice }}</td>
        <td class="col-6">
          <button @click="addAgent()">Add Agent</button>
          <br />
          <button @click="deleteAgent(agent.agentID)">Remove Agent</button>
        </td>
        <td class="col-7"><button @click="updateAgent(agent.agentID)">Edit Agent</button></td>
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
      agentPrice: ""
    }
  },
  computed: {
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
        agentPrice: this.agentPrice
      }
      this.$store.dispatch('updateAgent', update)
    }
  },
  mounted() {
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

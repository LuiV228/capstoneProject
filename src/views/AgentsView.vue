<template>
  <div class="agents">
    <h1 class="display-2">This is the agents page</h1>
    <div class="row row-cols-1 row-cols-md-5 g-4">
      <div v-for="agent in filteredAgents" :key="agent">
        <div class="col">
          <div class="card">
            <img :src="agent.agentPortfolio" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Codename: {{ agent.agentCodeName }}</h5>
              <h5 class="card-title">Role: {{ agent.agentRole }}</h5>
              <p class="card-text">
                Role Description: {{ agent.agentRoleDescription }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  computed: {
    getAgents() {
      return this.$store.dispatch("getAgents");
    },
    filteredAgents() {
      // Filter out the agents array to exclude a specific agent
      console.log(this.$store.state.agents);
      let agents =this.$store.state.agents.filter(
        agent => agent.agentCodeName !== "Unknown"
      );
      return agents
    },
  },
  mounted() {
    this.getAgents;
  },
};
</script>

<style scoped></style>

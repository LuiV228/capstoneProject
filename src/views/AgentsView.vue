<template>
  <header>
    <link
      href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
      rel="stylesheet"
    />
  </header>
  <div class="agents">
    <h1 class="display-2">This is the agents page</h1>
    <div class="row row-cols-1 row-cols-md-5 g-4 m-1">
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
              <div class="frame">
                <router-link @click="getAgent(agent.agentID)" :to="{ name: 'agent', params: { agentID: agent.agentID }}">
                  <button class="custom-btn btn-5">
                    <span>View Details</span>
                  </button>
                </router-link>
              </div>
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
  methods: {
    getAgent(agentID) {
      this.$store.dispatch("getAgent", agentID)
    }
  },
  computed: {
    getAgents() {
      return this.$store.dispatch("getAgents");
    },
    filteredAgents() {
      // Filter out the agents array to exclude a specific agent
      console.log(this.$store.state.agents);
      let agents = this.$store.state.agents.filter(
        (agent) => agent.agentCodeName !== "Unknown"
      );
      return agents;
    },
  },
  mounted() {
    this.getAgents;
  },
};
</script>

<style scoped>
.frame {
  width: 90%;
  margin-left: 10px;
  text-align: center;
}
.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}
.btn-5 {
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(129, 111, 104) 100%);
}
.btn-5:hover {
  color: #18c8e3;
  background: black;
  box-shadow: none;
}
.btn-5:before,
.btn-5:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #18c8e3;
  box-shadow: -1px -1px 5px 0px #000000, 7px 7px 20px 0px #0003,
    4px 4px 5px 0px #0002;
  transition: 400ms ease all;
}
.btn-5:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
.btn-5:hover:before,
.btn-5:hover:after {
  width: 100%;
  transition: 800ms ease all;
}
</style>

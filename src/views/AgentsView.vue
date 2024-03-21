<template>
  <header>
    <link
      href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
      rel="stylesheet"
    />
  </header>
  <div class="agents">
    <h1>
      <span class="display-2 multicolortext">This is the agents page</span>
    </h1>
    <div class="row row-cols-1 row-cols-md-5 g-4">
      <div v-for="agent in filteredAgents" :key="agent">
        <div class="col">
          <div class="content px-2">
            <div class="card mx-1 my-3 p-1">
              <img :src="agent.agentPortfolio" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Codename: {{ agent.agentCodeName }}</h5>
                <h5 class="card-title">Role: {{ agent.agentRole }}</h5>
                <div class="frame">
                  <router-link
                    @click="getAgent(agent.agentID)"
                    :to="{
                      name: 'agent',
                      params: { agentID: agent.agentID },
                    }"
                  >
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
  </div>
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    getAgent(agentID) {
      this.$store.dispatch("getAgent", agentID);
    },
  },
  computed: {
    agents() {
      return this.$store.state.agents;
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
    this.$store.dispatch("getAgents");
  },
};
</script>

<style scoped>
.agents {
  background: linear-gradient(
    -45deg,
    #191a1a,
    #18c8e3,
    #191a1a,
    #18c8e3,
    #191a1a
  );
  background-size: 600% 600%;
  height: 100%;
  animation: gradient 5s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.multicolortext {
  background-image: linear-gradient(to left, #0f4e57, #0b5353);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
}

h1 {
  padding-top: 25px;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.28) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(30px);
  border-radius: 10px;
  width: min(470px, 100%);
  margin-top: 11%;
  margin-bottom: 4%;
  box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset,
    0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12);
  z-index: 11;
}

.frame {
  width: 100%;
  text-align: center;
}

.card {
  background-color: #000000;
  color: #18c8e3;
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
  transition: all 0.6s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px #ffffff80, 7px 7px 20px 0px #0000001a,
    4px 4px 5px 0px #18c8e3;
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
  transition: 800ms ease all;
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

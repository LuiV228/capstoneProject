<template>
  <div class="agent">
    <h1 class="display-2">This is the agent page</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
      <div v-if="agent">
        <div class="col">
          <div class="card m-3">
            <img :src="agent.agentPortfolio" class="card-img-top" />
            <div class="card-body container-fluid justify-content-center">
              <h5 class="card-title">Codename: {{ agent.agentCodeName }}</h5>
              <h5 class="card-title">Role: {{ agent.agentRole }}</h5>
              <p class="card-text">
                Role Description: {{ agent.agentRoleDescription }}
              </p>
              <p class="card-text">Service Fee: R{{ agent.agentPrice }}</p>
              <div class="frame">
                <button class="custom-btn btn-5" @click="hireAgent(agent)">
                  <span>Hire Emissary</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    agent() {
      return this.$store.state.agent;
    },
  },
  methods: {
    hireAgent(agent) {
      this.$store.commit('addEmissaryToCart', agent);
    }
  },
  mounted() {
    this.$store.dispatch("getAgent", this.$route.params);
  },
};
</script>

<style scoped>
.agent {
  height: 100%;
  background: linear-gradient(#141e30, #243b55);
}

.frame {
  width: 100%;
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

.card {
  padding-bottom: 10px;
}
</style>

<template>
  <div class="emissaries">
    <h1 class="display-2">Emissaries Cart</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Agent ID</th>
          <th scope="col">Agent Codename</th>
          <th scope="col">Agent Role</th>
          <th scope="col">Service Fee</th>
          <th scope="col">Quantity</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(emissary, index) in emissaries" :key="index">
          <td>{{ emissary.emissaryID }}</td>
          <td>{{ emissary.agentID }}</td>
          <td>{{ emissary.agentCodeName }}</td>
          <td>{{ emissary.agentRole }}</td>
          <td>{{ emissary.agentPrice.length }}</td>
          <td>{{ emissary.quantity }}</td>
          <td scope="col"><button>Add</button></td>
          <td scope="col"><button>Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    emissaries() {
      return this.$store.state.emissaries;
    },
  },
  created() {
    this.$store.dispatch("getEmissaries");
  },
};
</script>

<style scoped>
/* Add your custom styles for the table */
</style>

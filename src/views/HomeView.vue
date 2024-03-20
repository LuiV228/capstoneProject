<template>
  <div class="home" v-if="!showSpinner"></div>
  <div>
    <h1 class="display-2">This is the Home page</h1>
  </div>
</template>
<script>

export default {
  name: "SpinnerComp",
  components: {

  },
  data() {
    return {
      showSpinner: true,
    };
  },
};
</script>

<style scoped></style>

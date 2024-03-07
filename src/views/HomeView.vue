<template>
  <div>
    <Spinner />
  </div>
  <div class="home" v-if="!showSpinner">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 class="display-2">This is the Home page</h1>
  </div>
</template>
<script>
import Spinner from "@/components/Spinner.vue";

export default {
  name: "SpinnerComp",
  components: {
    Spinner
  },
  data() {
    return {
      showSpinner: true,
    };
  },
};
</script>

<style scoped></style>

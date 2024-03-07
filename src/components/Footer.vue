<template>
  <div class="container-fluid fixed-bottom m" id="footer">
    <div class="row">
      <p class="lead">
        The Underworld &copy; <span>{{ currYear }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {
      currYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
#footer {
  padding-top: 16px;
  background-color: black;
  color: #18c8e3;
}
</style>

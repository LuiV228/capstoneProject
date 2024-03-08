<template>
  <NavBar
    v-if="!['/', '/login', '/register', '/spinner'].includes(this.$route.path)"
  />
  <main>
    <router-view />
  </main>
  <Footer
    v-if="!['/', '/login', '/register', '/spinner'].includes(this.$route.path)"
  />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>

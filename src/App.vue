<template>
  <NavBar />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer";
export default {
  components: {
    NavBar,
    Footer
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

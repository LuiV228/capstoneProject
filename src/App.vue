<template>
  <nav>
    <router-link to="/greek">Greek</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/services">Services</router-link> |
    <router-link to="/agents">Agents</router-link> |
    <router-link to="/agent">Agent</router-link> |
    <router-link to="/emissaries">Emissaries</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/admin">Admin</router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

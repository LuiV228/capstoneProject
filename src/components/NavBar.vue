<template>
  <nav
    class="navbar navbar-expand-lg bg-black border-bottom border-body"
    data-bs-theme="dark"
  >
    <div class="container-fluid">
      <router-link to="/home">
        <img
          src="https://i.ibb.co/JdTR3Cw/The-Underworld-Logo.png"
          alt="logo"
          id="logo"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <div class="nav-item px-3">
            <router-link to="/home" class="nav-link">Home</router-link>
          </div>
          <div class="nav-item px-3">
            <router-link to="/services" class="nav-link">Services</router-link>
          </div>
          <div class="nav-item px-3">
            <router-link to="/agents" class="nav-link">Agents</router-link>
          </div>
          <div class="nav-item px-3">
            <router-link to="/emissaries" class="nav-link">Emissaries</router-link>
          </div>
          <div class="nav-item px-3">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </div>
          <div class="nav-item px-3">
            <router-link to="/admin" class="nav-link">Admin</router-link>
          </div>
          <div class="nav-item px-3">
            <router-link to="/logout" class="nav-link">Log Out</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#logo {
  width: 50px;
  height: 50px;
}

nav {
  padding: 15px;
}

nav a.nav-link:hover {
  color: #5a7da0;
}

nav a.router-link-active:hover {
  color: #18c8e3;
}

nav a.router-link-exact-active {
  color: #18c8e3;
}
</style>

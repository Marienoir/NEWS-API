<template>
  <div id="app">
    <Navigation />
    <router-view />
    <!-- <Home/> -->
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Nunito+Sans:wght@200;400;600&family=Poppins:wght@400;500&display=swap");
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Nunito Sans", sans-serif;
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

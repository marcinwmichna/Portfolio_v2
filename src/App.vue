<template>
  <div id="app">
    <!-- <Nav msg="Welcome to Your Vue.js App" /> -->
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Hind:wght@300;400&display=swap");

body {
  margin: 0 !important;
  padding: 0 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  text-align: center;
  color: #2c3e50;
}
</style>

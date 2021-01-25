<template>
  <div id="app">
    <!-- <Nav msg="Welcome to Your Vue.js App" /> -->
    <Nav></Nav>
    <TheProcess></TheProcess>
    <RecentProjectsAndDesigns></RecentProjectsAndDesigns>
    <AboutMe></AboutMe>
    <WhatDoIOffer></WhatDoIOffer>
    <ContactMe></ContactMe>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import TheProcess from "@/components/TheProcess.vue";
import RecentProjectsAndDesigns from "@/components/RecentProjectsAndDesigns.vue";
import AboutMe from "@/components/AboutMe.vue";
import WhatDoIOffer from "@/components/WhatDoIOffer.vue";
import ContactMe from "@/components/ContactMe.vue";

export default {
  name: "App",
  components: {
    Nav,
    TheProcess,
    RecentProjectsAndDesigns,
    AboutMe,
    WhatDoIOffer,
    ContactMe,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Hind:wght@300;400;600&display=swap");

body {
  margin: 0 !important;
  padding: 0 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  // color: #2c3e50;
  ::selection {
    color: white;
    background: #424242;
  }
}
</style>

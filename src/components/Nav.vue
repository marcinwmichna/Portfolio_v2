<template>
  <nav>
    <!-- <div class="hello">{{ msg }}</div> -->
    <img class="img_me" src="../assets/me.png" alt="" />
    <Nav-description msg="testsetse">d</Nav-description>
    <h1>FRONT-END DEVELOPER & DESIGNER</h1>
  </nav>
</template>

<script>
import Nav_description from "@/components/Nav_description.vue";

export default {
  components: { Nav_description },
  name: "Nav",

  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
nav h1 {
  align-content: center;
  font-family: "Source Serif Pro", serif;
  font: bold;
  color: #353535;
  font-size: 7rem;
}
.img_me {
  margin-top: 9em;
  width: 12em;
  opacity: 0.9;
}
</style>

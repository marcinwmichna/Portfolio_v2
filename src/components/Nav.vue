<template>
  <nav>
    <!-- <div class="hello">{{ msg }}</div> -->
    <img src="../assets/me.png" alt="" />
    <h1>FRONT-END DEVELOPER & DESIGNER</h1>
  </nav>
</template>

<script>
export default {
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
</style>

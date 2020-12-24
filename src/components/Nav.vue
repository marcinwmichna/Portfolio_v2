<template>
  <nav>
    <!-- <div class="hello">{{ msg }}</div> -->
    <img class="img_me" src="../assets/me.png" alt="" />
    <Nav-description class="imageDesc" msg="MARCIN MICHNA"></Nav-description>
    <h1>FRONT-END DEVELOPER & DESIGNER</h1>
    <Nav-description
      class="headerDesc"
      msg="I'LL MAKE YOUR DREAM WEBSITE COME TRUE"
    ></Nav-description>
  </nav>
</template>

<script>
import NavDescription from "@/components/NavDescription.vue";

export default {
  components: {
    NavDescription,
  },
  name: "Nav",
  // props: {
  //   msg: String,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
  .img_me {
    background-image: url("../assets/Ellipse1.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 99%;
    background-position: center;
    padding: 0.55rem;
    margin-top: 9em;
    width: 7.7em;
  }
  .imageDesc {
    margin-top: 0.3rem;
  }
  h1 {
    align-content: center;
    font-family: "Source Serif Pro", serif;
    font: bold;
    color: #353535;
    font-size: 4.6rem;
  }
  .headerDesc {
    margin-top: -3.8rem;
  }
}
</style>

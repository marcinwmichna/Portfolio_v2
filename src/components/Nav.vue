<template>
  <nav>
    <img class="img_me" src="../assets/me.png" alt="" />
    <Nav-description class="imageDesc" msg="MARCIN MICHNA"></Nav-description>
    <h1>FRONT-END DEVELOPER & DESIGNER</h1>
    <nav-description
      class="headerDescription"
      msg="I'LL MAKE YOUR DREAM WEBSITE COME TRUE"
    ></nav-description>
    <div class="buttonsWrapper">
      <regular-button
        class="navButton"
        msg="SEE MY LATEST WORK"
      ></regular-button>
      <nav-description class="navButton" msg="CONTACT ME"></nav-description>
    </div>
  </nav>
</template>

<script>
import navDescription from "@/components/NavDescription.vue";
import regularButton from "@/components/RegularButton.vue";

export default {
  components: {
    navDescription,
    regularButton,
  },
  name: "Nav",
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
  .headerDescription {
    margin-top: -3.8rem;
  }
  .buttonsWrapper {
    display: flex;
  }

  .navButton {
  }
}
</style>

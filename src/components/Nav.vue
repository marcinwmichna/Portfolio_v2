<template>
  <nav>
    <img class="img_me" src="../assets/me.png" alt="" />
    <navDescription class="imageDesc" msg="MARCIN MICHNA"></navDescription>
    <h1>FRONT-END DEVELOPER & DESIGNER</h1>
    <navDescription
      class="headerDescription"
      msg="I'LL MAKE YOUR DREAM WEBSITE COME TRUE"
    ></navDescription>
    <div class="buttonsWrapper">
      <regularButton msg="SEE MY LATEST WORK"></regularButton>
      <mainButton msg="CONTACT ME"></mainButton>
    </div>
    <img src="../assets/Arrow.svg" alt="" />
  </nav>
</template>

<script>
import navDescription from "@/components/NavDescription.vue";
import regularButton from "@/components/RegularButton.vue";
import mainButton from "@/components/MainButton.vue";

export default {
  components: {
    navDescription,
    regularButton,
    mainButton,
  },
  name: "Nav",
};
</script>

<style scoped lang="scss">
nav {
  height: 100vh;
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
    margin-bottom: 0;
  }
  .headerDescription {
    margin-top: 0;
  }
  .buttonsWrapper {
    width: fit-content;
    display: flex;
    margin: 12rem auto 15rem auto;
    justify-content: space-around;
    align-content: center;
  }
}
</style>

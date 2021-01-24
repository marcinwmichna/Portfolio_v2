<template>
  <nav>
    <img class="img_me" src="../assets/me.png" alt="" />
    <NavDescription class="imageDesc" msg="MARCIN MICHNA"></NavDescription>
    <h1>FRONT-END DEVELOPER & DESIGNER</h1>
    <!-- <h1>LET'S CREATE UNIQUE WEB & GRAPHIC EXPERIENCE</h1> -->
    <!-- <navDescription
      class="headerDescription"
      msg="I'LL MAKE YOUR DREAM WEBSITE COME TRUE"
    ></navDescription> -->
    <NavDescription
      class="headerDescription"
      msg="LET'S CREATE UNIQUE WEB & GRAPHIC EXPERIENCE"
    ></NavDescription>
    <div class="buttonsWrapper">
      <RegularButton
        class="regularButton"
        msg="SEE MY LATEST WORK"
        redirect="#RecentProjectsAndDesigns"
      ></RegularButton>
      <MainButton
        class="mainButton"
        msg="CONTACT ME"
        redirect="#ContactMe"
      ></MainButton>
    </div>
    <img class="arrow" src="../assets/Arrow.svg" alt="" />
  </nav>
</template>

<script>
import NavDescription from "@/components/NavDescription.vue";
import RegularButton from "@/components/RegularButton.vue";
import MainButton from "@/components/MainButton.vue";

export default {
  components: {
    NavDescription,
    RegularButton,
    MainButton,
  },
  name: "Nav",
};
</script>

<style scoped lang="scss">
nav {
  text-align: center;
  .img_me {
    background-image: url("../assets/Ellipse1.svg");
    background-repeat: no-repeat;
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
    .regularButton {
      padding: 0.9rem 1rem;
      margin-right: 3rem;
    }
    .mainButton {
      padding: 0.9rem 0;
    }
  }
  .arrow {
    margin-bottom: 2rem;
  }
}
</style>

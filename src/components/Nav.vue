<template>
  <section>
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
  </section>
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
section {
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
    font-weight: 300;
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
    font-weight: 300;
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
@media screen and (max-width: 1000px) {
  section h1,
  section .imageDesc,
  section .headerDescription {
    padding: 0 2rem;
  }

  .buttonsWrapper {
    .regularButton {
      margin-right: 1rem !important;
    }
  }
}

@media screen and (max-width: 550px) {
  .img_me {
    margin-top: 1rem !important;
  }
  section h1 {
    font-size: 3rem;
  }
  section h2,
  section h2 ::v-deep a {
    font-size: 1rem;
  }
  section {
    .buttonsWrapper {
      margin: 5rem auto;
      display: flex;
      flex-direction: column;
      .regularButton {
        margin: 0 0 1rem 0 !important;
      }
    }
  }
}
</style>

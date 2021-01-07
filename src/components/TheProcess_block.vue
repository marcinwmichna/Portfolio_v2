<template>
  <div class="wrapper">
    <div class="single_block">
      <h2 class="counter">1</h2>
      <div class="section_text_wrapper">
        <NavDescription msg="INFORMATION GATHERING"></NavDescription>
        <SectionSubheader
          msg="WHAT IS THE PURPOSE, WHAT ARE THE GOALS, WHO IS YOUR TARGET AUDIENCE AND WHAT CONTENT YOU WOULD LIKE TO INCLUDE."
        ></SectionSubheader>
      </div>
    </div>
    <div class="single_block">
      <h2 class="counter">2</h2>
      <div class="section_text_wrapper">
        <NavDescription msg="PLANNING"></NavDescription>
        <SectionSubheader
          msg="ESTABLISHING ALL MAIN TOPIC AREAS OF THE SITE, AS WELL AS SUB-TOPICS, IF APPLICABLE."
        ></SectionSubheader>
      </div>
    </div>
    <div class="single_block">
      <h2 class="counter">3</h2>
      <div class="section_text_wrapper">
        <NavDescription msg="DESIGN"></NavDescription>
        <SectionSubheader
          msg="DETERMINING THE LOOK AND FEEL OF YOUR SITE: COLORS, TYPOGRAPHY, COMPANY LOGO. "
        ></SectionSubheader>
      </div>
    </div>
    <div class="single_block">
      <h2 class="counter">4</h2>
      <div class="section_text_wrapper">
        <NavDescription msg="DEVELOPMENT"></NavDescription>
        <SectionSubheader
          msg="BASED ON PREVIOUS STEPS CREATION OF THE WEBSITE. "
        ></SectionSubheader>
      </div>
    </div>
    <div class="single_block">
      <h2 class="counter">5</h2>
      <div class="section_text_wrapper">
        <NavDescription msg="TESTING & DELIVERY"></NavDescription>
        <SectionSubheader
          msg="EVERYTHING MUST RUN SMOOTHLY WITHOUT A GLITCH. NO COMPROMISES. "
        ></SectionSubheader>
      </div>
    </div>
    <div class="single_block">
      <h2 class="counter">6</h2>
      <div class="section_text_wrapper">
        <NavDescription msg="MAINTENANCE & UPDATES"></NavDescription>
        <SectionSubheader
          msg="YOUR WEBSITE IS LIVE. NEED AN IMPROVEMENT OR UPDATE? FEEL FREE TO MAIL ME."
        ></SectionSubheader>
      </div>
    </div>
    <RegularButton
      class="contactButton"
      msg="MARCIN.W.MICHNA@GMAIL.COM"
    ></RegularButton>
  </div>
</template>
<script>
import NavDescription from "@/components/NavDescription.vue";
import SectionSubheader from "@/components/SectionSubheader.vue";
import RegularButton from "@/components/RegularButton.vue";

export default {
  components: {
    NavDescription,
    SectionSubheader,
    RegularButton,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .single_block {
    display: flex;
    flex-wrap: nowrap;

    .counter {
      background-image: url("../assets/Ellipse 3.svg");
      background-repeat: no-repeat;
      background-size: 53px 51px;
      background-position: 3px 16px;
      color: #ffffff;
      padding: 1.5rem;
      margin: 0;
    }
    h2 {
      font-size: 1.5rem;
      font-family: "Hind", serif;
      font-weight: 400;
      padding: 1.5rem 1.2rem 0.6rem 1.2rem;
    }

    .section_text_wrapper {
      width: 20vw;
      max-width: 400px;
      min-width: 320px;
      h2 {
        margin: 0;
      }
      h3 {
        padding: 0 1.2rem 1.2rem 1.2rem;
      }
    }
  }
  .contactButton {
    width: 20vw;
    margin: 0;
    width: 100%;
    text-align: right;
    padding: 0;
    margin: 2rem 0;
  }
}
</style>

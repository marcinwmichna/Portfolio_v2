<template>
  <section id="WhatDoIOffer">
    <div class="contentWrapper">
      <SectionHeader msg="WHAT DO I OFFER?"></SectionHeader>
      <SectionUpheader class="upheader" msg="MY KEY ASPECTS"></SectionUpheader>
      <SectionSubheader
        class="description"
        msg="IT IS ALL ABOUT THE DETAILS IN EVERY ASPECT: DESIGN, DEVELOPMENT AND GOOD COMMUNICATION."
      ></SectionSubheader>
      <SectionSubheader
        class="description"
        msg="I AM FOCUSED ON PRECISE AND MEANINGFULL DESIGNES. CURRENTLY EXPLORING AND BUILDING ALL CODE AND NON-CODE RELATED INCLUDING SUCH AS: JAVASCRIPT, NODEJS AND MORE."
      ></SectionSubheader>
      <SectionUpheader class="upheader" msg="WHAT AM I LIKE?"></SectionUpheader>
      <SectionSubheader
        class="description"
        msg="SELF-MOTIVATED AND CHEERFUL PERSON WITH PASSION AND STRONG EDUCATION BACKGROUND. SEEKING TO IMPROVE KEY DEVELOPMENT & DESIGNING ABILITIES."
      ></SectionSubheader>
    </div>
  </section>
</template>
<script>
import SectionHeader from "@/components/SectionHeader.vue";
import SectionSubheader from "@/components/SectionSubheader.vue";
import SectionUpheader from "@/components/SectionUpheader.vue";
// import NavDescription from "@/components/NavDescription.vue";

export default {
  components: {
    SectionHeader,
    SectionSubheader,
    SectionUpheader,
    // NavDescription,
  },
};
</script>
<style lang="scss" scoped>
.upheader {
  padding-top: 2rem !important;
}
.description {
  margin-top: 0;
  font-weight: 300;
}
.contentWrapper {
  position: relative;
  width: 70vw;
  max-width: 1100px;
  margin: auto;
  margin-bottom: 9rem;
  margin-top: 7rem;
}
@media screen and (max-width: 550px) {
  .contentWrapper {
    width: 90vw !important;
  }
}
</style>

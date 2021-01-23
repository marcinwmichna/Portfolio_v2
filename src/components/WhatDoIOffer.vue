<template>
  <section id="WhatDoIOffer">
    <div class="contentWrapper">
      <SectionHeader msg="WHAT DO I OFFER?"></SectionHeader>
      <SectionUpheader class="upheader" msg="MY KEY ASPECTS"></SectionUpheader>
      <NavDescription
        class="description"
        msg="It is all about the details in every aspect: design, development and good communication.
I am focused on precise and meaningfull designes. Currently exploring, searching, designing and building all code and non-code related including such as: JavaScript, nodeJS and more."
      ></NavDescription>
      <SectionUpheader class="upheader" msg="WHAT AM I LIKE?"></SectionUpheader>
      <NavDescription
        class="description"
        msg="Self-motivated and cheerful person with passion and strong education background. Seeking to improve key development & designing abilities."
      ></NavDescription>
    </div>
  </section>
</template>
<script>
import SectionHeader from "@/components/SectionHeader.vue";
// import SectionSubheader from "@/components/SectionSubheader.vue";
import SectionUpheader from "@/components/SectionUpheader.vue";
import NavDescription from "@/components/NavDescription.vue";

export default {
  components: {
    SectionHeader,
    // SectionSubheader,
    SectionUpheader,
    NavDescription,
  },
};
</script>
<style lang="scss" scoped>
.upheader {
  padding-top: 2rem !important;
}
.description {
  margin-top: 0;
}
</style>

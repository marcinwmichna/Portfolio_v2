<template>
  <section id="ContactMe">
    <div class="contentWrapper">
      <div class="contactBlock">
        <SectionUpheader msg="INTRESTED?"></SectionUpheader>
        <SectionHeader class="header" msg="LET'S WORK TOGETHER"></SectionHeader>
      </div>
      <div class="menuBlock">
        <div class="linksBlock">
          <SectionUpheader msg="QUICK LINKS"></SectionUpheader>
          <SectionHeader class="header" msg="MENU"></SectionHeader>
          <RegularButton redirect="#HowIWork" msg="HOW I WORK"></RegularButton>
          <RegularButton
            redirect="#HowIWork"
            msg="RECENT PROJECTS"
          ></RegularButton>
          <RegularButton
            redirect="#HowIWork"
            msg="WORK EXPERIENCE"
          ></RegularButton>
          <RegularButton redirect="#HowIWork" msg="EDUCATION"></RegularButton>
          <RegularButton redirect="#HowIWork" msg="MY SKILLS"></RegularButton>
        </div>
        <div class="socialBlock">
          <RegularButton msg="LINKEDIN"></RegularButton>
          <RegularButton msg="GITHUB"></RegularButton>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SectionHeader from "@/components/SectionHeader.vue";
// import SectionSubheader from "@/components/SectionSubheader.vue";
import SectionUpheader from "@/components/SectionUpheader.vue";
// import NavDescription from "@/components/NavDescription.vue";
import RegularButton from "@/components/RegularButton.vue";

export default {
  components: {
    // NavDescription,
    // SectionSubheader,
    SectionUpheader,
    // NavDescription,
    RegularButton,
    SectionHeader,
  },
};
</script>
<style lang="scss" scoped>
.contentWrapper {
  margin-bottom: 0;
}
#ContactMe {
  background: #f9f9f9;
}
.header::before {
  width: 0 !important;
  height: 0 !important;
}
</style>

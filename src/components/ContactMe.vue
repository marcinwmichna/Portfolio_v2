<template>
  <section id="ContactMe">
    <div class="contentWrapper">
      <div class="contactBlock">
        <SectionUpheader msg="INTRESTED?"></SectionUpheader>
        <SectionHeader class="header" msg="LET'S WORK TOGETHER"></SectionHeader>
        <SectionSubheader
          msg="I’M CURRENTLY AVAILABLE AND LOOKING FOR INTRESTING AND DEMANDING JOB. I’D LOVE TO TALK TO YOU!  "
        ></SectionSubheader>
        <div class="inputBlock">
          <SectionSubheader msg="YOUR E-MAIL"></SectionSubheader>
          <form action="#" method="GET">
            <input
              type="text"
              required="true"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </form>
          <RegularButton
            redirect="#TODO"
            msg="MARCIN.W.MICHNA@GMAIL.COM"
          ></RegularButton>
        </div>
      </div>
      <div class="menuBlock">
        <div class="linksBlock">
          <SectionUpheader msg="QUICK LINKS"></SectionUpheader>
          <SectionHeader class="header" msg="MENU"></SectionHeader>
          <RegularButton
            class="footerButton"
            redirect="#HowIWork"
            msg="HOW I WORK"
          ></RegularButton>
          <RegularButton
            class="footerButton"
            redirect="#RecentProjectsAndDesigns"
            msg="RECENT PROJECTS"
          ></RegularButton>
          <RegularButton
            class="footerButton"
            redirect="#AboutMe"
            msg="WORK EXPERIENCE"
          ></RegularButton>
          <RegularButton
            class="footerButton"
            redirect="#AboutMe"
            msg="EDUCATION"
          ></RegularButton>
          <!-- <RegularButton redirect="#HowIWork" msg="MY SKILLS"></RegularButton> -->
        </div>
        <div class="socialBlock">
          <RegularButton
            class="footerButton"
            redirect="linkedin.com/in/marcinwmichna"
            msg="LINKEDIN"
          ></RegularButton>
          <RegularButton
            class="footerButton"
            redirect="github.com/marcinwmichna"
            msg="GITHUB"
          ></RegularButton>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SectionHeader from "@/components/SectionHeader.vue";
import SectionUpheader from "@/components/SectionUpheader.vue";
import RegularButton from "@/components/RegularButton.vue";
import SectionSubheader from "@/components/SectionSubheader.vue";

export default {
  components: {
    SectionUpheader,
    RegularButton,
    SectionHeader,
    SectionSubheader,
  },
};
</script>
<style lang="scss" scoped>
.contentWrapper {
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  .contactBlock {
    margin-right: 5rem;
  }
  .menuBlock {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    .button ::v-deep a {
      color: #424242;
    }
    .footerButton {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    .socialBlock {
      display: flex;
    }
    .socialBlock > h2:first-child {
      margin-right: 1rem;
    }
  }
}
#ContactMe {
  background: #f9f9f9;
}
.header::before {
  width: 0 !important;
  height: 0 !important;
}
</style>

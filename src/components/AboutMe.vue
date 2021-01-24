<template>
  <section id="AboutMe">
    <SectionUpheader
      class="wrapper"
      msg="ABOUT ME & MY EDUCATION"
    ></SectionUpheader>
    <div class="aboutMeWrapper wrapper">
      <div class="workExperience">
        <SectionHeader class="block" msg="WORK EXPERIENCE"></SectionHeader>
        <NavDescription
          class="title block"
          msg="INFOSOFTWARE POLSKA"
        ></NavDescription>
        <div class="subTitle block">
          <SectionSubheader msg="RZESZÓW"></SectionSubheader>
          <SectionSubheader
            class="subTitle_date"
            msg="7.2019-9.2019"
          ></SectionSubheader>
        </div>

        <SectionSubheader
          class="aboutTitle block"
          msg=".NET DEVELOPER INTERNSHIP"
        ></SectionSubheader>
        <ul class="block">
          <li>
            <SectionSubheader
              msg="WORKED IN TEAM OF .NET DEVELOPERS"
            ></SectionSubheader>
          </li>
          <li>
            <SectionSubheader
              msg="PROVIDED MAINTENANCE FOR OFFICIAL WEBSITE OF THE COMPANY: HTML, CSS AND JAVASCRIPT"
            ></SectionSubheader>
          </li>
          <li>
            <SectionSubheader msg="PERFORMED MANUAL TESTS"></SectionSubheader>
          </li>
          <li>
            <SectionSubheader
              msg="REDESIGNED UI SECTION OF WEBSITE"
            ></SectionSubheader>
          </li>
        </ul>
      </div>
      <div class="education">
        <SectionHeader msg="EDUCATION"></SectionHeader>
        <div class="achievementBlock">
          <NavDescription
            class="title"
            msg="MASTER OF COMPUTER ENGINEERING"
          ></NavDescription>
          <div class="subTitle">
            <SectionSubheader msg="SPECIALITY: DATA SCIENCE"></SectionSubheader>
            <SectionSubheader
              msg="KRAKÓW UNIVERSITY OF TECHNOLOGY"
            ></SectionSubheader>
            <SectionSubheader
              class="subTitle_date"
              msg="2020 - NOW"
            ></SectionSubheader>
          </div>
        </div>
        <div class="achievementBlock">
          <NavDescription
            class="title"
            msg="COMPUTER ENGINEERING DEGREE"
          ></NavDescription>
          <div class="subTitle">
            <SectionSubheader
              msg="SPECIALITY: INFORMATION OF TECHNOLOGY IN BUSINESS"
            ></SectionSubheader>
            <SectionSubheader
              msg="RZESZÓW UNIVERSITY OF TECHNOLOGY"
            ></SectionSubheader>
            <SectionSubheader
              class="subTitle_date"
              msg="2016 - 2020"
            ></SectionSubheader>
          </div>
        </div>
        <div class="achievementBlock">
          <NavDescription class="title" msg="CISCO CCNA "></NavDescription>
          <div class="subTitle">
            <SectionSubheader msg="ROUTING & SWITCHING"></SectionSubheader>
            <SectionSubheader
              class="subTitle_date"
              msg="2019"
            ></SectionSubheader>
          </div>
        </div>
        <div class="achievementBlock">
          <NavDescription
            class="title"
            msg="EUROPEAN COMPUTER DRIVING LICENCE"
          ></NavDescription>
          <div class="subTitle">
            <SectionSubheader
              class="subTitle_date"
              msg="2011"
            ></SectionSubheader>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SectionUpheader from "@/components/SectionUpheader.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import NavDescription from "@/components/NavDescription.vue";
import SectionSubheader from "@/components/SectionSubheader.vue";

export default {
  components: {
    SectionUpheader,
    SectionHeader,
    SectionSubheader,
    NavDescription,
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-weight: 400;
  margin-bottom: 0;
}

section {
  background: #f9f9f9;
  .subTitle_date {
    opacity: 0.7;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 70vw;
    max-width: 1100px;
    margin: auto;

    .block {
      max-width: 75%;
    }
  }
  .aboutMeWrapper {
    padding-bottom: 6rem;
  }
  .workExperience {
    .subTitle {
      margin-bottom: 2em;
    }
    .aboutTitle {
      font-weight: 400;
    }
    ul {
      padding: 0;
      margin-top: 0;
    }
    ul li {
      display: list-item;
      margin-left: 1em;
    }
    ul li::marker {
      color: #585858;
    }
  }
}
</style>

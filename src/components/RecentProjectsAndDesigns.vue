<template>
  <section class="contentWrapper" id="RecentProjectsAndDesigns">
    <SectionHeader
      class="title"
      msg="RECENT PROJECTS AND DESIGNS"
    ></SectionHeader>
    <div class="blockWrapper">
      <RecentProjectsAndDesignsBlockHorizontal
        upHeader="THE WEATHERR"
        mainHeader="WEATHER APPLICATION"
        subHeader="MY LATEST WORK. CLEAN AND SIMPLE. MADE WITH VUEJS & VUEX USING OPEN WEATHER API. DESIGNED IN FIGMA."
        viewWebsiteButton="VIEW WEBSITE"
        urlToImage="theWeatherr.png"
        urlToWebsite="https://theweatherrdeploy.herokuapp.com/"
        urlToDesign=""
      ></RecentProjectsAndDesignsBlockHorizontal>
      <RecentProjectsAndDesignsBlockHorizontal
        mainHeader="RESUME"
        subHeader="MY OWN RESUME. INCLUDES MY SKILLSET, CONTACT INFORMATION AND WORK EXPERIENCE. CLEAN AND SIMPLE. DESIGNED IN FIGMA."
        viewDesignButton="VIEW DESIGN"
        viewWebsiteButton="VIEW WEBSITE"
        urlToImage="resume.png"
        urlToDesign="https://www.figma.com/file/kYcT0dBhA1dbPcqozeeUpn/Resume?node-id=0%3A1"
        urlToWebsite="https://marcinwmichna.github.io/Resume/"
      ></RecentProjectsAndDesignsBlockHorizontal>
      <div class="verticalBlocksWrapper">
        <RecentProjectsAndDesignsBlockVertical
          upHeader="PERSONAL PORTFOLIO"
          mainHeader="PORTFOLIO WEBSITE "
          subHeader="PREVIOUS PERSONAL PORTFOLIO WEBSITE MADE USING VANILLA JS, VANILLA HTML & CSS. EMAIL SENDER HANDLED WITH NODEJS."
          viewWebsiteButton="VIEW WEBSITE"
          urlToImage="portfolioWebsite.png"
          urlToWebsite="https://marcinwmichna.github.io/portfolio/"
          urlToDesign=""
        ></RecentProjectsAndDesignsBlockVertical>
        <RecentProjectsAndDesignsBlockVertical
          upHeader="TO BUY"
          mainHeader="SHOPPING APPLICATION"
          subHeader="CLEAN AND INTUITIVE SHOPPING LIST WEBSITE. MADE WITH VUEJS."
          viewWebsiteButton="VIEW WEBSITE"
          urlToImage="shoppingApplication.png"
          urlToWebsite="https://marcinwmichna.github.io/shopping-list/"
          urlToDesign=""
        ></RecentProjectsAndDesignsBlockVertical>
        <RecentProjectsAndDesignsBlockVertical
          upHeader="BET IT OUT"
          mainHeader="VIRTUAL SPORT BETTING"
          subHeader="APPLICATION CONCEPT BASED ON VIRTUAL SPORTS BETTING IDEA. DESIGNED IN FIGMA."
          viewDesignButton="VIEW DESIGN"
          urlToImage="betItOut.png"
          urlToDesign="https://www.figma.com/file/BAqTNG4wFRGQHgyqmLT9eP/Bet-it-out?node-id=0%3A1"
          urlToWebsite=""
        ></RecentProjectsAndDesignsBlockVertical>
      </div>
    </div>
  </section>
</template>
<script>
import SectionHeader from "@/components/SectionHeader.vue";
import RecentProjectsAndDesignsBlockHorizontal from "@/components/RecentProjectsAndDesigns_block_horizontal.vue";
import RecentProjectsAndDesignsBlockVertical from "@/components/RecentProjectsAndDesigns_block_vertical.vue";

export default {
  components: {
    SectionHeader,
    RecentProjectsAndDesignsBlockHorizontal,
    RecentProjectsAndDesignsBlockVertical,
  },
};
</script>
<style lang="scss" scoped>
.contentWrapper {
  position: relative;
  width: 70vw;
  max-width: 1100px;
  margin: auto;
  margin-bottom: 9rem;
  margin-top: 7rem;

  .blockWrapper {
    .verticalBlocksWrapper {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
}
@media screen and (max-width: 1400px) {
  section .contentWrapper {
    width: 70vw;
  }
  .blockWrapper {
    .verticalBlocksWrapper {
      display: flex;
    }
  }
}
@media screen and (max-width: 768px) {
  .verticalBlocksWrapper {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 550px) {
  .contentWrapper {
    width: 90vw !important;
  }
}
</style>

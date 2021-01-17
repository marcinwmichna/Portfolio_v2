<template>
  <section>
    <div class="contentWrapper">
      <SectionHeader
        class="title"
        msg="RECENT PROJECTS AND DESIGNS"
      ></SectionHeader>
      <div class="blockWrapper">
        <RecentProjectsAndDesignsBlockHorizontal
          upHeader="THE WEATHERR"
          mainHeader="WEATHER APPLICATION"
          subHeader="MY LATEST WORK. CLEAN AND SIMPLE. MADE WITH VUEJS & VUEX USING OPEN WEATHER API. DESIGNED IN FIGMA."
          viewDesignButton="VIEW WEBSITE"
          urlToImage="theWeatherr.png"
        ></RecentProjectsAndDesignsBlockHorizontal>
        <RecentProjectsAndDesignsBlockHorizontal
          mainHeader="RESUME"
          subHeader="MY OWN RESUME. INCLUDES MY SKILLSET, CONTACT INFORMATION AND WORK EXPERIENCE. CLEAN AND SIMPLE. DESIGNED IN FIGMA."
          viewDesignButton="VIEW DESIGN"
          viewWebsiteButton="VIEW WEBSITE"
          urlToImage="resume.png"
        ></RecentProjectsAndDesignsBlockHorizontal>
        <div class="verticalBlocksWrapper">
          <RecentProjectsAndDesignsBlockVertical
            upHeader="PERSONAL PORTFOLIO"
            mainHeader="PORTFOLIO WEBSITE "
            subHeader="PREVIOUS PERSONAL PORTFOLIO WEBSITE MADE USING VANILLA JS, VANILLA HTML & CSS. EMAIL SENDER HANDLED WITH NODEJS."
            viewDesignButton="VIEW WEBSITE"
            urlToImage="portfolioWebsite.png"
          ></RecentProjectsAndDesignsBlockVertical>
          <RecentProjectsAndDesignsBlockVertical
            upHeader="TO BUY"
            mainHeader="SHOPPING APPLICATION"
            subHeader="CLEAN AND INTUITIVE SHOPPING LIST WEBSITE. MADE WITH VANILLA JS, HTML & CSS."
            viewDesignButton="VIEW WEBSITE"
            urlToImage="shoppingApplication.png"
          ></RecentProjectsAndDesignsBlockVertical>
          <RecentProjectsAndDesignsBlockVertical
            upHeader="BET IT OUT"
            mainHeader="VIRTUAL SPORT BETTING"
            subHeader="APPLICATION CONCEPT BASED ON VIRTUAL SPORTS BETTING IDEA. DESIGNED IN FIGMA."
            viewDesignButton="VIEW DESIGN"
            urlToImage="betItOut.png"
          ></RecentProjectsAndDesignsBlockVertical>
        </div>
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
<style lang="scss">
.contentWrapper {
  position: relative;
  width: 55vw;
  max-width: 1100px;
  margin: auto;
  .title {
    margin-top: 7rem;
  }
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
}
</style>

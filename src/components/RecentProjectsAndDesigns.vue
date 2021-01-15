<template>
  <section>
    <div class="contentWrapper">
      <SectionHeader
        class="title"
        msg="RECENT PROJECTS AND DESIGNS"
      ></SectionHeader>
      <div class="blockWrapper">
        <RecentProjectsAndDesignsBlock
          upHeader="THE WEATHERR"
          mainHeader="WEATHER APPLICATION"
          subHeader="MY LATEST WORK. CLEAN AND SIMPLE. MADE WITH VUEJS & VUEX USING OPEN WEATHER API. DESIGNED IN FIGMA."
          viewDesignButton="VIEW WEBSITE"
          urlToImage="theWeatherr.png"
        ></RecentProjectsAndDesignsBlock>
        <RecentProjectsAndDesignsBlock
          mainHeader="RESUME"
          subHeader="MY OWN RESUME. INCLUDES MY SKILLSET, CONTACT INFORMATION AND WORK EXPERIENCE. CLEAN AND SIMPLE. DESIGNED IN FIGMA."
          viewDesignButton="VIEW DESIGN"
          viewWebsiteButton="VIEW WEBSITE"
          urlToImage="resume.png"
        ></RecentProjectsAndDesignsBlock>
        <RecentProjectsAndDesignsBlock
          mainHeader="RESUME"
          subHeader="MY OWN RESUME. INCLUDES MY SKILLSET, CONTACT INFORMATION AND WORK EXPERIENCE. CLEAN AND SIMPLE. DESIGNED IN FIGMA."
          viewDesignButton="VIEW DESIGN"
          viewWebsiteButton="VIEW WEBSITE"
          urlToImage="resume.png"
        ></RecentProjectsAndDesignsBlock>
        <RecentProjectsAndDesignsBlock
          mainHeader="RESUME"
          subHeader="MY OWN RESUME. INCLUDES MY SKILLSET, CONTACT INFORMATION AND WORK EXPERIENCE. CLEAN AND SIMPLE. DESIGNED IN FIGMA."
          viewDesignButton="VIEW DESIGN"
          viewWebsiteButton="VIEW WEBSITE"
          urlToImage="resume.png"
        ></RecentProjectsAndDesignsBlock>
        <RecentProjectsAndDesignsBlock
          mainHeader="RESUME"
          subHeader="MY OWN RESUME. INCLUDES MY SKILLSET, CONTACT INFORMATION AND WORK EXPERIENCE. CLEAN AND SIMPLE. DESIGNED IN FIGMA."
          viewDesignButton="VIEW DESIGN"
          viewWebsiteButton="VIEW WEBSITE"
          urlToImage="resume.png"
        ></RecentProjectsAndDesignsBlock>
      </div>
    </div>
  </section>
</template>
<script>
import SectionHeader from "@/components/SectionHeader.vue";
import RecentProjectsAndDesignsBlock from "@/components/RecentProjectsAndDesigns_block.vue";

export default {
  components: {
    SectionHeader,
    RecentProjectsAndDesignsBlock,
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
}
@media screen and (max-width: 1400px) {
  section .contentWrapper {
    width: 70vw;
  }
}
</style>

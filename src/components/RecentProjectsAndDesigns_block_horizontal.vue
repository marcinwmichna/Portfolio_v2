<template>
  <section id="RecentProjects" class="block">
    <div class="description_block">
      <SectionSubheader class="projectName" :msg="upHeader"></SectionSubheader>
      <NavDescription class="mainHeader" :msg="mainHeader"></NavDescription>
      <SectionSubheader class="description" :msg="subHeader"></SectionSubheader>
      <RegularButton
        class="viewButton"
        :msg="viewDesignButton"
        :redirect="urlToDesign"
      ></RegularButton>
      <RegularButton
        class="viewButton"
        :msg="viewWebsiteButton"
        :redirect="urlToWebsite"
      ></RegularButton>
      <!-- <h2>{{ redirect }}</h2> -->
    </div>
    <picture class="image_block">
      <img :src="require(`../assets/${urlToImage}`)" alt="" />
    </picture>
  </section>
</template>
<script>
import NavDescription from "@/components/NavDescription.vue";
import SectionSubheader from "@/components/SectionSubheader.vue";
import RegularButton from "@/components/RegularButton.vue";

export default {
  props: {
    upHeader: String,
    mainHeader: String,
    subHeader: String,
    viewDesignButton: String,
    viewWebsiteButton: String,
    urlToImage: String,
    urlToWebsite: String,
    urlToDesign: String,
  },
  components: {
    NavDescription,
    RegularButton,
    SectionSubheader,
  },
};
</script>
<style lang="scss" scoped>
.block {
  margin: 7rem 0;
  display: flex;
  position: relative;
  justify-content: space-between;
  .description_block {
    margin: auto;
    margin-right: 5rem;
    .projectName {
      color: #424242;
    }
    .mainHeader {
      margin-top: 0;
      // font-weight: bold;
    }
    .description {
      margin-bottom: 2rem;
    }
    .viewButton {
      padding: 0;
      margin: 0.5rem 0;
    }
  }
  picture {
    position: relative;
  }
  picture::before {
    content: "";
    position: absolute;
    background-color: #f8f8f8;
    width: 100%;
    height: 100%;
    z-index: -1;
    // left: -5px;
    top: -4px;
  }
}
@media screen and (max-width: 1000px) {
  .block {
    // display: flex;
    flex-direction: column;
    flex-flow: column-reverse;
    margin: 4rem 0;
    .description_block {
      margin: 2rem 0 0 0;
    }
    .image_block {
      img {
        width: 100%;
        margin: auto;
      }
    }
  }
}
</style>

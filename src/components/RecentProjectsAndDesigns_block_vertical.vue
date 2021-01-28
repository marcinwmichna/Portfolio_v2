<template>
  <div class="block">
    <div class="imageDescWrapper">
      <picture class="image_block">
        <img :src="require(`../assets/${urlToImage}`)" alt="" />
      </picture>
      <div class="description_block">
        <div class="descriptionWrapper">
          <SectionSubheader
            class="projectName"
            :msg="upHeader"
          ></SectionSubheader>
          <NavDescription class="mainHeader" :msg="mainHeader"></NavDescription>
          <SectionSubheader
            class="description"
            :msg="subHeader"
          ></SectionSubheader>
        </div>
      </div>
    </div>

    <div class="burronsWrapper">
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
    </div>
  </div>
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
  margin-top: 2rem;
  width: 29%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .description_block {
    margin: auto;
    margin-top: 2rem;
    justify-content: space-between;

    display: flex;
    flex-direction: column;

    .projectName {
      color: #424242;
    }
    .mainHeader {
      margin-top: 0;
      // font-weight: bold;
    }
    .description {
      margin-bottom: 1rem;
    }
    .viewButton {
      padding: 0;
      margin: 0.5rem 0;
      position: absolute;
      bottom: 0;
    }
  }
  picture {
    margin: auto;
    img {
      max-width: 100%;
      height: auto;
    }
  }
}
@media screen and (max-width: 768px) {
  .verticalBlocksWrapper .block {
    margin-top: 4rem;
    width: 100%;
    .image_block {
      img {
        width: 100%;
      }
    }
  }
}
</style>

<template>
  <section class="block">
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
    urlToImage: URL,
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
    margin-right: 3rem;
    .projectName {
      color: #424242;
    }
    .mainHeader {
      margin-top: 0;
      font-weight: bold;
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
    background-color: #f4f5f9;
    width: 95%;
    height: 93%;
    z-index: -1;
    left: -15px;
    top: -15px;
  }
  @media screen and (max-width: 1900px) {
    .image_block img {
      width: 35vw;
    }
    picture::before {
      height: 93%;
    }
  }
  @media screen and (max-width: 1000px) {
    picture::before {
      height: 22vw;
    }
  }
}
</style>

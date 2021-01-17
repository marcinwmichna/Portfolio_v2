<template>
  <div class="block">
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
      <div class="buttonsWrapper">
        <RegularButton
          class="viewButton"
          :msg="viewDesignButton"
        ></RegularButton>
        <RegularButton
          class="viewButton"
          :msg="viewWebsiteButton"
        ></RegularButton>
      </div>
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
    urlToImage: URL,
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
  --width: 31vw;
  margin-top: 2rem;
  // display: flex;
  // flex-direction: column;
  // position: relative;
  width: 29%;

  // margin: 5px;
  .description_block {
    margin: auto;
    // margin-bottom: auto;
    margin-top: 2rem;
    // margin-bottom: 0;
    // height: calc(100% - 27vw);
    height: calc(100% - var(--width));
    justify-content: space-between;
    // align-content: space-between;

    // -webkit-align-content: space-between;
    display: flex;
    flex-direction: column;
    .descriptionWrapper {
      // margin: auto;
    }
    .projectName {
      color: #424242;
    }
    .mainHeader {
      margin-top: 0;
      font-weight: bold;
    }
    .description {
      margin-bottom: 1rem;
      // margin-bottom: auto;
    }
    .viewButton {
      padding: 0;
      margin: 0.5rem 0;
      // align-self: flex-end;
    }
  }
  picture {
    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 1900px) {
    .image_block img {
      // width: 35vw;
    }
    picture::before {
      height: 93%;
    }
  }
  @media screen and (max-width: 1000px) {
    picture::before {
      // height: 22vw;
    }
  }
  @media screen and (min-width: 1400px) {
    .description_block {
      height: calc(120% - var(--width));
    }
  }
}
</style>

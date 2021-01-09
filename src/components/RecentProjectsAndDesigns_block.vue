<template>
  <div class="block">
    <div class="description">
      <SectionSubheader :msg="upHeader"></SectionSubheader>
      <NavDescription msg="WEATHER APPLICATION"></NavDescription>
      <SectionSubheader
        msg="MY LATEST WORK. CLEAN AND SIMPLE. MADE WITH VUEJS USING OPEN WEATHER API. DESIGNED IN FIGMA."
      ></SectionSubheader>
      <RegularButton msg="VIEW WEBSITE"></RegularButton>
    </div>
    <div class="image"></div>
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
  },
  components: {
    NavDescription,
    RegularButton,
    SectionSubheader,
  },
};
</script>
<style lang="scss" scoped>
</style>

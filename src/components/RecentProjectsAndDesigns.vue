<template>
  <section>
    <div class="contentWrapper">
      <SectionHeader msg="RECENT PROJECTS AND DESIGNS"></SectionHeader>
      <div class="blockWrapper">
        <RecentProjectsAndDesignsBlock
          upHeader="ds"
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
  .blockWrapper {
  }
}
</style>

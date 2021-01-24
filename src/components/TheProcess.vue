<template>
  <section id="HowIWork">
    <div class="contentWrapper">
      <SectionUpheader msg="HOW I WORK"></SectionUpheader>
      <SectionHeader msg="THE PROCESS"></SectionHeader>
      <SectionSubheader
        msg="REACH YOUR BUSINESS GOALS WITH UNIQUE USER EXPERIENCE. "
      ></SectionSubheader>
      <SectionSubheader
        msg="LET’S START WORKING ON YOUR AWESOME WEB APP AND MAKE OTHER ENVY YOU. "
      ></SectionSubheader>
      <div class="blockWrapper">
        <TheProcessBlock></TheProcessBlock>
      </div>
    </div>
  </section>
</template>
<script>
import SectionSubheader from "@/components/SectionSubheader.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import SectionUpheader from "@/components/SectionUpheader.vue";
import TheProcessBlock from "@/components/TheProcess_block.vue";

export default {
  components: {
    SectionSubheader,
    SectionHeader,
    SectionUpheader,
    TheProcessBlock,
  },
};
</script>
<style lang="scss" scoped>
section {
  background: #f9f9f9;
  padding-bottom: 4rem;
  .contentWrapper {
    position: relative;
    width: 70vw;
    max-width: 1100px;
    margin: auto;
    .blockWrapper {
      margin-top: 3rem;
    }
  }
}
@media screen and (max-width: 1400px) {
  section .contentWrapper {
    width: 70vw;
  }
}
</style>

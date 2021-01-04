<template>
  <section>
    <div class="contentWrapper">
      <SectionSubheader msg="HOW I WORK" color="#5a6fe0"></SectionSubheader>
      <SectionHeader msg="THE PROCESS"></SectionHeader>
      <SectionSubheader
        msg="REACH YOUR BUSINESS GOALS WITH UNIQUE USER EXPERIENCE. "
      ></SectionSubheader>
      <SectionSubheader
        msg="LET’S START WORKING ON YOUR AWESOME WEB APP AND MAKE OTHER ENVY YOU. "
      ></SectionSubheader>
    </div>
  </section>
</template>
<script>
import SectionSubheader from "@/components/SectionSubheader.vue";
import SectionHeader from "@/components/SectionHeader.vue";

export default {
  components: {
    SectionSubheader,
    SectionHeader,
  },
};
</script>
<style lang="scss" scoped>
section {
  background: #f9f9f9;
  .contentWrapper {
    width: 70vw;
    margin: auto;
  }
}
</style>

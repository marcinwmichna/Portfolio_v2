<template>
  <h3 id="ds" :style="cssProps">{{ msg }}</h3>
</template>
<script>
export default {
  name: "SectionSubheader",
  props: {
    msg: String,
    color: String,
  },
  computed: {
    cssProps() {
      return {
        "--fontColor": this.color,
      };
    },
  },
};
</script>
<style scoped lang="scss">
h3 {
  //   align-content: center;
  font-family: "Hind", serif;
  font-weight: 300;
  font-size: 1rem;
  //   color: #5a6fe0;
  color: var(--fontColor);
}
</style>

<template>
  <h3>{{ msg }}</h3>
</template>
<script>
export default {
  name: "SectionSubheader",
  props: {
    msg: String,
  },
};
</script>
<style scoped lang="scss">
h3 {
  font-family: "Hind", serif;
  font-weight: 300;
  font-size: 1rem;
  padding-top: 4rem;
  color: #5a6fe0;
  margin: 0;
}
</style>

<template>
  <h2 class="button">
    <a v-if="redirect[0] == '#'" :href="`${redirect}`">{{ msg }}</a>
    <a v-else :href="`${redirect}`" target="_blank">{{ msg }}</a>
  </h2>
</template>
<script>
export default {
  name: "RegularButton",
  props: {
    msg: String,
    redirect: String,
  },
};
</script>
<style  lang="scss" scoped>
a:hover {
  // color: black;
}
.button {
  white-space: nowrap;
  margin: 0;
  align-content: center;
  font-family: "Hind", serif;
  font-weight: 300;
  font-size: 1.5rem;
  // margin-right: 3rem;
  a {
    text-decoration: none;
    color: #5a6fe0;
  }
}
</style>

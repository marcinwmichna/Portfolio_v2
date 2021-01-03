<template>
  <h2>
    <a href="#">{{ msg }}</a>
  </h2>
</template>
<script>
export default {
  name: "RegularButton",
  props: {
    msg: String,
  },
};
</script>
<style scoped lang="scss">
a {
  text-decoration: none;
  color: #5a6fe0;
  padding: 0.9rem 3rem;
}
h2 {
  white-space: nowrap;
  margin: 0;
  align-content: center;
  font-family: "Hind", serif;
  font-weight: 300;
  font-size: 1.5rem;
  // padding: 1rem 0;
  margin-right: 3rem;
}
</style>

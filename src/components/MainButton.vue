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
  color: #f2f2f2;
  padding: 1rem 3rem;
}
h2 {
  align-content: center;
  font-family: "Hind", serif;
  font-weight: 300;
  font-size: 1.5rem;
  padding: 1rem 0;
  color: #f2f2f2;
  background-color: #5a6fe0;
}
</style>

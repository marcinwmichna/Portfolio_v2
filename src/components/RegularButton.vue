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
}
a:visited {
}
h2 {
  align-content: center;
  font-family: "Hind", serif;
  font-weight: 300;
  font-size: 1.5rem;
  padding: 1rem;
  margin-right: 3rem;
}
</style>

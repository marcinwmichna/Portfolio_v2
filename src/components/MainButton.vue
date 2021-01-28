<template>
  <h2>
    <a :href="`${redirect}`">{{ msg }}</a>
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
<style scoped lang="scss">
a {
  text-decoration: none;
  color: #f2f2f2;
  padding: 1.2rem 3rem;
  background-color: #5a6fe0;
}
h2 {
  white-space: nowrap;
  margin: 0;
  align-content: center;
  font-family: "Hind", serif;
  font-weight: 300;
  font-size: 1.5rem;
  color: #f2f2f2;
}
</style>

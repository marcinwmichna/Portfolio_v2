<template>
  <h2>{{ msg }}</h2>
</template>
<script>
export default {
  name: "NavDescription",
  props: {
    msg: String,
  },
};
</script>
<style scoped lang="scss">
h2 {
  align-content: center;
  font-family: "Hind", serif;
  font-weight: 500;
  font-size: 1.5rem;
  color: #424242;
}
</style>

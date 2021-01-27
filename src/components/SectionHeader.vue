<template>
  <h2>{{ msg }}</h2>
</template>
<script>
export default {
  name: "SectionHeader",
  props: {
    msg: String,
  },
};
</script>
<style scoped lang="scss">
*,
::before,
::after {
  box-sizing: border-box;
}

h2 {
  font-family: "Source Serif Pro", serif;
  position: relative;
  color: #353535;
  font-size: 2.8rem;
  margin: 0 0 1rem 0;
  z-index: 0;
  width: fit-content;
}
h2::before {
  content: "";
  position: absolute;
  background-color: #d5daf3;
  width: 95%;
  height: 50%;
  z-index: -1;
  left: -15px;
  top: 27px;
}
@media screen and (max-width: 550px) {
  h2 {
    font-size: 2.4rem;
  }
}
</style>

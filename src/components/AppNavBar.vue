<template>
  <div class="app-navbar">
    <h3 class="app-navbar__title">{{title}}</h3>
  </div>
</template>

<script>

export default {
  name: "AppNavBar",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss" >
@import ".././styles/variables.scss";

.app-navbar {
  background-color: $color-grey-light;
  border-bottom: 1px solid $color-grey;
  padding: 1em;
  width: 100%;
  height: $height-navbar;
  box-sizing: border-box;

  &__title {
    color: $color-primary;
    margin: 0;
  }
}
</style>
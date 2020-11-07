<template>
  <div class="app-button" @click="$emit('click')">
    <p class="app-button__text">{{this.title}}</p>
  </div>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import ".././styles/variables.scss";

.app-button {
  background-color: $color-primary;
  color: white;
  border-radius: $border-radius;
  padding: $border-radius 1.5em;
  margin: $border-radius;
  &__text {
    margin: 0em;
  }
}
</style>
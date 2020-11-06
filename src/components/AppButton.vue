<template>
  <div class="app-button" @click="$emit('click')">
    {{this.title}}
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
  border-radius: 0.5em;
  padding: 0.5em;
  margin: 0.5em;
}
</style>
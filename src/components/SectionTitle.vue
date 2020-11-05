<template>
  <div class="section-title">
    <p class="section-title__title">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
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

.section-title {
  color: $color-primary;
  border-bottom: 1px solid $color-primary;
  padding: 0.5em;
  text-align: left;
  &__title {
    margin: 0;
  }
}
</style>
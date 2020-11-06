<template>
  <div class="section-title">
    <p class="section-title__title">{{title}}</p>
    <p class="section-title__title">{{secondaryTitle}}</p>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: {
      type: String,
      required: true
    },
    secondaryTitle: {
      type: String,
      required: false
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
  display: flex;
  justify-content: space-between;
  margin: 0.5em;
  &__title {
    margin: 0;
  }
}
</style>
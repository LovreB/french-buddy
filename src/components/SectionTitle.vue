<template>
  <div class="section-title">{{title}}</div>
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
}
</style>
<template>
  <div class="app-button" :class="{'app-button--disabled': disabled}" @click="onClick">
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
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    onClick() {
      if (!this.disabled)
        this.$emit('click')
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
  &--disabled {
    opacity: 0.5;
  }
  &__text {
    margin: 0em;
  }
}
</style>
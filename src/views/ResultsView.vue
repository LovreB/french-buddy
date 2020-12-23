<template>
  <div class="results-view">
    <h2>Nice work! Your results:</h2>
    <p>Correct Answers: {{correctAnswers}}</p>
    <p>Wrong Answers: {{falseAnswers}}</p>
    <AppButton @click="$emit('play-again', false)" title="Play again" class="results-view__button"/>
    <AppButton v-if="(falseAnswers > 0)" @click="$emit('play-again', true)" title="Retry wrong answers" class="results-view__button"/>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton";

export default {
  name: "ResultsView",
  components: {
    AppButton
  },
  props: {
    correctAnswers: {
      type: Number,
      required: true
    },
    falseAnswers: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import ".././styles/variables.scss";

.results-view {
  &__button {
    margin: auto;
    width: 30%;
    margin-bottom: 1em;
  }
}
</style>
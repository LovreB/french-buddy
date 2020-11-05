<template>
  <div class="results-view">
    <h2>Nice work! Your results:</h2>
    <p>Correct Answers: {{correctAnswers}}</p>
    <p>Wrong Answers: {{falseAnswers}}</p>
    <button @click="$emit('play-again')">Spela igen</button>
  </div>
</template>

<script>
export default {
  name: "ResultsView",
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

<style scoped>

</style>
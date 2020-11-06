<template>
  <div class="practise">
    <translation-simple-box v-if="this.words.length > 0"
                            :primary-word="swedish"
                            :secondary-word="french"
                            @next="nextWord"
    />
    <results-view
        v-if="this.showResults"
        :correctAnswers="correctAnswers"
        :falseAnswers="wrongAnswers"
        @play-again="resetRound"/>
  </div>
</template>

<script>
import TranslationSimpleBox from "@/components/TranslationSimpleBox";
import ResultsView from "@/views/ResultsView";

export default {
  name: "PractiseSimpleView",
  components: {
    ResultsView,
    TranslationSimpleBox
  },
  props: {
    words: {
      type: Array
    }
  },
  data () {
    return {
      index: 0,
      showResults: false,
      correctAnswers: 0,
      firstTry: true
    }
  },
  computed: {
    french: function() {
      return this.words[this.index]?.french;
    },
    swedish: function() {
      return this.words[this.index]?.swedish;
    },
    wrongAnswers() {
      return this.words.length - this.correctAnswers
    },
    hasNextWord() {
      return this.index < this.words.length - 1
    }
  },
  methods: {
    nextWord(isFirstTry) {
      if (isFirstTry) {this.correctAnswers += 1}
      if (this.hasNextWord){

        this.index += 1;
      } else {
        this.showResults = true;
      }
    },
    resetRound() {
      this.showResults = false;
      this.index = 0;
      this.correctAnswers = 0;
    }
  }
}
</script>

<style scoped>

</style>
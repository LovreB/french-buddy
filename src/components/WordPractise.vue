<template>
  <div class="word-practise">
    <translation-simple-box
        v-if="this.selectedWords.length > 0"
        :primary-word="swedish"
        :secondary-word="french"
        @next="nextWord"/>
    <results-view
        v-if="this.showResults"
        :correctAnswers="correctAnswers"
        :falseAnswers="wrongAnswers"
        @play-again="resetRound"
    />
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
      selectedWords: [],
      index: 0,
      showResults: false,
      correctAnswers: 0,
      firstTry: true,
      wrongAnsweredWords: [],
    }
  },
  watch: {
    words(oldwords, newwords) {
      console.log(`old ${oldwords}`)
      console.log(`old ${newwords}`)
      this.selectedWords = newwords;
    }
  },
  computed: {
    french: function() {
      return this.selectedWords[this.index]?.french;
    },
    swedish: function() {
      return this.selectedWords[this.index]?.swedish;
    },
    wrongAnswers() {
      return this.selectedWords.length - this.correctAnswers
    },
    hasNextWord() {
      return this.index < this.selectedWords.length - 1
    }
  },
  created: function () {
    this.selectedWords = this.words;
  },
  methods: {
    nextWord(isFirstTry) {
      if (isFirstTry) {
        this.correctAnswers += 1
      } else {
        this.wrongAnsweredWords.push(this.words[this.index])
      }
      if (this.hasNextWord){
        this.index += 1;
      } else {
        this.showResults = true;
      }
    },
    resetRound(onlyUseWrongAnswers) {
      if (onlyUseWrongAnswers) {
        this.selectedWords = this.wrongAnsweredWords;
      }
      this.wrongAnsweredWords = [];
      this.showResults = false;
      this.index = 0;
      this.correctAnswers = 0;
    }
  }
}
</script>

<style scoped>

</style>
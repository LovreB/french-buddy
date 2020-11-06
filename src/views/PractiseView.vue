<template>
  <div class="practise">
    <h2>Practise</h2>
    <translation-simple-box v-if="this.verbs.length > 0"
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
import {getVerbPresent} from "@/utils/api";
import {verbToSimple} from "@/utils/wordConverter";
import ResultsView from "@/views/ResultsView";

export default {
  name: "PractiseView",
  components: {
    ResultsView,
    TranslationSimpleBox
  },
  data () {
    return {
      verbs: [],
      index: 0,
      showResults: false,
      correctAnswers: 0,
      firstTry: true
    }
  },
  computed: {
    french: function() {
      return this.verbs[this.index]?.french;
    },
    swedish: function() {
      return this.verbs[this.index]?.swedish;
    },
    wrongAnswers() {
      return this.verbs.length - this.correctAnswers
    },
    hasNextWord() {
      return this.index < this.verbs.length - 1
    }
  },
  created() {
    this.getWords()
  },
  methods: {
    async getWords() {
      const verbsResponse = await getVerbPresent();
      this.verbs = verbToSimple(verbsResponse);
    },
    nextWord(isFirstTry) {
      console.log(isFirstTry)
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
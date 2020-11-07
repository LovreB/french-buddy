<template>
  <div class="practise">
    <h2>Practise</h2>
    <WordList v-if="this.verbs && !isPractiseMode"
      :words="this.verbs"
      @toggle-word="toggleVerb"
    ></WordList>
    <AppButton
      v-if="this.verbs && !isPractiseMode"
      @click="beginPractiseMode"
      title="Start round"/>
    <PractiseSimpleView v-if="isPractiseMode"
      :words="selectedWords"/>
  </div>
</template>

<script>
import {getVerbPresent} from "@/utils/api";
import {verbToSimple} from "@/utils/wordConverter";
import WordList from "@/components/WordList";
import PractiseSimpleView from "@/views/PractiseSimpleView";
import AppButton from "@/components/AppButton";

export default {
  name: "PractiseView",
  components: {
    AppButton,
    PractiseSimpleView,
    WordList,
  },
  data () {
    return {
      verbs: [],
      index: 0,
      showResults: false,
      correctAnswers: 0,
      firstTry: true,
      isPractiseMode: false,
      selectedVerbs: [],
      selectedWords: [],
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
      this.verbs =  await getVerbPresent();
    },
    toggleVerb(verb) {
      let verbIndex = this.selectedVerbs.indexOf(verb);
      (verbIndex === -1) ? this.selectedVerbs.push(verb) : this.selectedVerbs.splice(verbIndex, 1)
    },
    beginPractiseMode() {
      this.selectedWords = verbToSimple(this.selectedVerbs);
      this.isPractiseMode = true;
    }

  }
}
</script>

<style scoped>

</style>
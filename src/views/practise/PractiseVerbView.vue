<template>
  <div>
    <WordSelection v-if="!isPractiseMode"
      :words="this.verbs"
      @begin-round="beginRound"/>
    <WordPractise v-if="isPractiseMode"
      :words="selectedWords"/>
  </div>
</template>

<script>
import WordSelection from "@/components/WordSelection";
import WordPractise from "@/components/WordPractise";
import {getVerbPresent} from "@/utils/api";
import {verbToSimple} from "@/utils/wordConverter";

export default {
  name: "PractiseVerbView",
  components: {
    WordPractise,
    WordSelection
  },
  data () {
    return {
      verbs: [],
      index: 0,
      showResults: false,
      correctAnswers: 0,
      firstTry: true,
      isPractiseMode: false,
      selectedWords: [],
    }
  },
  mounted() {
    this.getWords()
  },
  methods: {
    async getWords() {
      this.verbs =  await getVerbPresent();
    },
    beginRound(selectedVerbs) {
      this.selectedWords = verbToSimple(selectedVerbs);
      this.isPractiseMode = true;
    }

  }
}
</script>

<style scoped>

</style>
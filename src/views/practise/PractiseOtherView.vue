<template>
  <div>
    <WordSelection
      v-if="!isPractiseMode"
      :words="this.words"
      @begin-round="beginRound"/>
    <WordPractise
      v-if="isPractiseMode"
      :words="selectedWords"/>
  </div>
</template>

<script>
import WordPractise from "@/components/WordPractise";
import WordSelection from "@/components/WordSelection";
import {getAllWords} from "@/utils/api";

export default {
  name: "PractiseOtherView",
  components: {
    WordPractise,
    WordSelection,
  },
  data () {
    return {
      words: [],
      isPractiseMode: false,
      selectedWords: [],
    }
  },
  mounted() {
    console.log('mountedss')
    this.getWords()
  },
  methods: {
    async getWords() {
      this.words =  await getAllWords();
    },
    beginRound(selectedWords) {
      this.selectedWords = selectedWords;
      this.isPractiseMode = true;
    }

  }
}
</script>

<style scoped>

</style>
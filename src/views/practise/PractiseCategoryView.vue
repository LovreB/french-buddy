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
import {getAllCategories, getWordsInCategories} from "@/utils/api";

export default {
  name: "PractiseCategory",
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
    this.getWords()
  },
  methods: {
    async getWords() {
      this.words =  await getAllCategories();
    },
    async beginRound(selectedCategories) {
      let categoryIds = selectedCategories.map(c => c.id)
      this.selectedWords = await getWordsInCategories(categoryIds);
      this.selectedWords.push(...selectedCategories)
      this.isPractiseMode = true;
    }
  }
}
</script>

<style scoped>

</style>
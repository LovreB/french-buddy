<template>
  <div class="word-selection">
    <WordList
      :words="this.words"
      @toggle-word="toggleWord"
    ></WordList>
    <AppButton
        title="Start round"
        :disabled="selectedWords.length == 0"
        @click="$emit('begin-round', selectedWords)"

        />
  </div>
</template>

<script>
import AppButton from "@/components/AppButton";
import WordList from "@/components/WordList";

export default {
name: "PractiseSelectionWordList",
  components: {
    AppButton,
    WordList,
  },
  props: {
    words: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data () {
    return {
      selectedWords: [],
    }
  },
  methods: {
    toggleWord(verb) {
      let wordIndex = this.selectedWords.indexOf(verb);
      (wordIndex === -1) ? this.selectedWords.push(verb) : this.selectedWords.splice(wordIndex, 1)
    }
  }
}
</script>

<style scoped>

</style>
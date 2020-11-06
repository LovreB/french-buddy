<template>
  <div class="word-list">
    <SectionTitle
        title="French"
        secondaryTitle="Swedish"/>
    <WordListRow v-for="(word, index) in words"
      :key="word.french"
      :word="word"
      :class="{'word-list__last-row': index == words.length - 1}"
      @toggle-word="$emit('toggle-word', word)"/>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";
import WordListRow from "@/components/WordListRow";
export default {
  name: "WordList",
  components: {WordListRow, SectionTitle},
  props: {
    words: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>

.word-list {
  &__last-row {
    border-bottom: 1px solid lightgrey;
  }
}
</style>

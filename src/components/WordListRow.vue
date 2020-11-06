<template>
  <div class="word-list-row"
       :class="{'word-list-row--selected': isSelected}"
       @click="toggleWord(word)">
    <p class="word-list-row__primary-word">{{ word.french }}</p>
    <p class="word-list-row__primary-word">{{ word.swedish }}</p>
  </div>
</template>

<script>
export default {
  name: "WordListRow",
  props: {
    word: {
      type: Object,
      required: true,
      validator: value => {
        const hasFrench = Object.prototype.hasOwnProperty.call(value, "french");
        const hasSwedish = Object.prototype.hasOwnProperty.call(value, "swedish");
        return hasFrench && hasSwedish
      }
    }
  },
  data() {
    return {
      isSelected: false
    }
  },
  methods: {
    toggleWord(word) {
      this.isSelected = !this.isSelected
      this.$emit('toggle-word', word)
    }
  }
}
</script>

<style lang="scss" scoped>

.word-list-row{
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  border-top: 1px solid lightgrey;

  &__primary-word {
    border-bottom: none !important;
  }
  &--selected {
    font-weight: bold;
  }
}
</style>
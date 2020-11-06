<template>
  <div class="translation-simple-box">
    <section-title :title="primaryTitle"/>
    <p>{{primaryWord}}</p>
    <section-title :title="secondaryTitle"/>
    <div class="input-container">
      <input v-model="answer" class="input-container__input"/>
    </div>
    <p v-if="showError">Fel svar!</p>
    <button @click="checkAnswer">Nästa</button>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";

export default {
  name: "TranslationSimpleBox",
  components: {
    SectionTitle
  },
  props: {
    primaryWord: {
      type: String,
      required: true
    },
    secondaryWord: {
      type: String,
      required: true
    },
    isTranslatingFrench: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      showError: false,
      answer: '',
      isFirstTry: true,
    }
  },
  computed: {
    primaryTitle() {
      return (this.isTranslatingFrench) ? 'Svenska' : 'Français'
    },
    secondaryTitle() {
      return (this.isTranslatingFrench) ? 'Français' : 'Svenska'
    },
    isCorrectAnswer() {
      return this.answer === this.secondaryWord
    }
  },
  methods: {
    checkAnswer(){
      if (this.isCorrectAnswer) {
        this.$emit('next', this.isFirstTry);
        this.resetValues();
      } else {
        this.showError = true;
        this.isFirstTry = false;
      }
    },
    resetValues() {
      this.answer = '';
      this.isFirstTry = true;
      this.showError = false;
    }
  }
}
</script>

<style scoped lang="scss">
.input-container {
  text-align: right;
  padding: 0.5em;

  &__input {
    width: 65%;
    min-width: 200px;
  }
}

</style>
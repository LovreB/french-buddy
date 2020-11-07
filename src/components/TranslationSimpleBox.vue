<template>
  <div class="translation-simple-box">
    <div class="translation-simple-box__form">
      <section-title :title="primaryTitle"/>
      <p>{{primaryWord}}</p>
      <section-title :title="secondaryTitle"/>
      <div class="input-container">
        <input v-model="answer" class="input-container__input" :class="{'input-container__input--error': showError}"/>
      </div>
    </div>
    <div class="button-container">
      <AppButton @click="showAnswer" title="Show Answer" class="button-container__button"/>
      <AppButton @click="checkAnswer" title="Next" class="button-container__button"/>
    </div>
    <p v-if="showError" class="error">Fel svar!</p>
    <p v-if="isShowingAnswer">Correct answer is: {{secondaryWord}}</p>

  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";
import AppButton from "@/components/AppButton";

export default {
  name: "TranslationSimpleBox",
  components: {
    AppButton,
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
      isShowingAnswer: false,
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
        this.isShowingAnswer = false;
        this.showError = true;
        this.isFirstTry = false;
      }
    },
    showAnswer() {
      this.showError = false;
      this.isFirstTry = false;
      this.isShowingAnswer = true;
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
@import ".././styles/variables.scss";

.translation-simple-box {
  &__form {
    margin-bottom: 2em;
  }
}
.input-container {
  text-align: right;
  padding: 0.5em;

  &__input {
    width: 65%;
    min-width: 200px;
    border: 1px solid $color-primary;
    border-radius: $border-radius;
    padding: $border-radius;
    &--error {
      border: 1px solid $color-error;
    }
  }
}
.button-container {
  display: flex;
  margin-bottom: 2em;
  &__button {
    max-width: 50%;
    margin: auto;
    min-width: 30%;
  }
}
.error {
  color: $color-error;
}

</style>
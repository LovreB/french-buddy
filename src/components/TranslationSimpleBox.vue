<template>
  <div class="translation-simple-box">
    <section-title :title="primaryTitle"/>
    <p>{{primaryWord}}</p>
    <section-title :title="secondaryTitle"/>
    <div>
      <input v-model="answer"/>
      <p v-if="showError">Fel svar!</p>
    </div>
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
      answer: ''
    }
  },
  computed: {
    primaryTitle() {
      return (this.isTranslatingFrench) ? 'Svenska' : 'Français'
    },
    secondaryTitle() {
      return (this.isTranslatingFrench) ? 'Français' : 'Svenska'
    }
  },
  methods: {
    checkAnswer(){
      if (this.answer === this.secondaryWord) {
        this.$emit('next');
      } else {
        this.showError = true;
      }
    }
  }
}
</script>

<style scoped>

</style>
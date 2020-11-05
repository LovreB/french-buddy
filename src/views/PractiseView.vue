<template>
  <div class="practise">
    <h2>Practise</h2>
    <translation-simple-box v-if="this.verbs.length > 0"
      :primary-word="swedish"
      :secondary-word="french"
      @next="nextWord"
    />
  </div>
</template>

<script>
import TranslationSimpleBox from "@/components/TranslationSimpleBox";
import {getVerbPresent} from "@/utils/api";
import {verbToSimple} from "@/utils/wordConverter";

export default {
  name: "PractiseView",
  components: {
    TranslationSimpleBox
  },
  data () {
    return {
      verbs: [],
      index: 0,
    }
  },
  computed: {
    french: function() {
      return this.verbs[this.index]?.french;
    },
    swedish: function() {
      return this.verbs[this.index]?.swedish;
    }
  },
  created() {
    this.getWords()
  },
  methods: {
    async getWords() {
      const verbsResponse = await getVerbPresent();
      console.log(verbsResponse);
      console.log('hohoho')
      this.verbs = verbToSimple(verbsResponse);
      console.log(this.verbs);
      console.log('afterawait')
    },
    nextWord() {
      if (this.index < this.verbs.length - 1){
        this.index += 1;
      } else {
        // TODO Add transistion
      }
    }
  }
}
</script>

<style scoped>

</style>
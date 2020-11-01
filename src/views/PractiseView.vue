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
import axios from "axios";

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
      axios.get(`http://localhost:5000/verb`)
          .then(response => {
            console.log(response.data)
            this.verbs = response.data
          })
          .catch(e => {
            console.log("get error")
            console.log(e)
          })
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
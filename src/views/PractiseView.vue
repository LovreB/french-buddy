<template>
  <div class="practise">
    <h2>Practise</h2>
    <div v-if="verbs">
      <section-title title="Svenska"/>
      <p>{{swedish}}</p>
      <section-title title="Franska"/>
      <div>
        <input v-model="translation" v-if="isGuessing"/>
        <p v-if="!isGuessing">{{french}}</p>
      </div>
      <button @click="next">{{buttonText}}</button>
    </div>

  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";
import axios from "axios";
export default {
  name: "PractiseView",
  components: {
    SectionTitle
  },
  props: {

  },
  data () {
    return {
      translation: '',
      verbs: [],
      index: 0,
      isGuessing: true,
    }
  },
  computed: {
    french: function() {
      return this.verbs[this.index]?.french;
    },
    swedish: function() {
      return this.verbs[this.index]?.swedish;
    },
    buttonText: function() {
      return (this.isGuessing) ? 'Correct' : 'Next'
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
    next() {
      if (!this.isGuessing && this.index < this.verbs.length - 1){
        this.index += 1;
      } else {
        // TODO Add transistion
      }
      this.isGuessing = !this.isGuessing;
    }
  }
}
</script>

<style scoped>

</style>
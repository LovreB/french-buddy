
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>Verb: {{verb}}</div>
    <button @click="getWords">Uppdatera ord</button>
    <h3>New verb</h3>
    <p>Svenska</p>
    <input v-model="swedish" placeholder="grundform">
    <input v-model="swPresent" placeholder="presens">
    <p>Franska</p>
    <input v-model="french" placeholder="grundform">
    <p>Singular</p>
    <input v-model="frFirstSingular" placeholder="1:a">
    <input v-model="frSecondSingular" placeholder="2:a">
    <input v-model="frThirdSingular" placeholder="3:e">
    <p>Plural</p>
    <input v-model="frFirstPlural" placeholder="1:a">
    <input v-model="frSecondPlural" placeholder="2:a">
    <input v-model="frThirdPlural" placeholder="3:e">
    <p>Översättning är sv:{{ swedish }}, fr: {{french}}</p>
    <button @click="postWord">Lägg till ord</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      verb: [],
      swedish: '',
      french: '',
      swPresent: '',
      frFirstSingular: '',
      frSecondSingular: '',
      frThirdSingular: '',
      frFirstPlural: '',
      frSecondPlural: '',
      frThirdPlural: '',
    }
  },
  // Fetches posts when the component is created.
  created() {
    this.getWords()
  },
  methods: {
    async postWord() {
      axios.post(`http://localhost:5000/verb`, {
        'french': this.french,
        'swedish': this.swedish,
        'swPresent': this.swPresent,
        'frFirstSingular': this.frFirstSingular,
        'frSecondSingular': this.frSecondSingular,
        'frThirdSingular': this.frThirdSingular,
        'frFirstPlural': this.frFirstPlural,
        'frSecondPlural': this.frSecondPlural,
        'frThirdPlural': this.frThirdPlural,
      })
          .then(response => {
            // JSON responses are automatically parsed.
            console.log('success')
            console.log(response)
            this.clearTables();
          })
          .catch(e => {
            console.log('post error')
            console.log(e)
          })
    },
    async getWords() {
      axios.get(`http://localhost:5000/verb`)
          .then(response => {
            // JSON responses are automatically parsed.
            console.log(response.data)
            this.verb = response.data
          })
          .catch(e => {
            console.log("get error")
            console.log(e)
          })
    },
    clearTables() {
      this.swedish = '',
      this.french = '',
      this.swPresent = '',
      this.frFirstSingular = '',
      this.frSecondSingular = '',
      this.frThirdSingular = '',
      this.frFirstPlural = '',
      this.frSecondPlural = '',
      this.frThirdPlural = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$test: red;
h3 {
  margin: 40px 0 0;
  color: $test;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

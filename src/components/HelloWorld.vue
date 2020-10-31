
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>Verb: {{verb}}</div>
    <button @click="getWords">Uppdatera ord</button>
    <h3>New verb</h3>
    <p>Svenska</p>
    <input v-model="swedish" placeholder="edit me">
    <p>Franska</p>
    <input v-model="french" placeholder="edit me">
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
      swedish: 'ja',
      french: 'oui',
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
        'swedish': this.swedish
      })
          .then(response => {
            // JSON responses are automatically parsed.
            console.log('success')
            console.log(response)
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

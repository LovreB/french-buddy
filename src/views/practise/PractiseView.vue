<template>
  <div class="practise">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "PractiseView",
  data () {
    return {
      wordTypes: ["Verb", "Other"]
    }
  },
  methods: {
    practise(type) {
      this.router.push({ name: type })
    },
  }
}
</script>

<style scoped>

</style>
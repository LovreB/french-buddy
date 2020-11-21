<template>
  <div class="practise">
    <AppNavBar title="Practise"/>
    <router-view/>
  </div>
</template>

<script>
import AppNavBar from "@/components/AppNavBar";

export default {
  name: "PractiseView",
  components: {
    AppNavBar
  },
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
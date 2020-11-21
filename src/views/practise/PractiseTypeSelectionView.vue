<template>
  <div>
    <AppButton
        v-for="type in wordTypes"
        :key="type"
        :title="type"
        @click="practise(type)"/>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton";

export default {
  name: "PractiseSelectionView",
  components: {
    AppButton
  },
  data () {
    return {
      wordTypes: ["Verb", "Other"]
    }
  },
  methods: {
    practise(type) {
      this.$router.push({name: type})
    },
  }
}
</script>

<style scoped>

</style>
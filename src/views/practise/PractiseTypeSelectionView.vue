<template>
  <div>
    <AppButton
        v-for="type in wordTypes"
        :key="type.name"
        :title="type.name"
        @click="practise(type.routeName)"/>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton";

export default {
  name: "PractiseTypeSelectionView",
  components: {
    AppButton
  },
  data () {
    return {
      wordTypes: [{
        name: "Verb",
        routeName: "practiseVerb"
      },{
        name: "Category",
        routeName: "practiseCategory"
      },{
        name: "Other",
        routeName: "practiseOther"
      }]
    }
  },
  methods: {
    practise(routeName) {
      this.$router.push({name: routeName})
    },
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="tab-bar">
    <TabBarTab
      v-for="tab in tabs"
      :key="tab.title"
      :title="tab.title"
      :img="tab.img"
      :route="tab.route"
    />
  </div>
</template>

<script>
import TabBarTab from "@/components/TabBarTab";

export default {
  name: "TabBar",
  components: {TabBarTab},
  props: {
    tabs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss" >
@import ".././styles/variables.scss";

.tab-bar {
  background-color: $color-primary;
  display: flex;
  justify-content: space-around;
}
</style>
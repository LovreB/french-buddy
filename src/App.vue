<template>
  <div id="app" class="app">
    <router-view class="app__router-view"></router-view>
    <TabBar
        class="app__tab-bar"
        :tabs="tabs"/>
  </div>
</template>

<script>

import TabBar from "@/components/TabBar";
export default {
  name: 'App',
  components: {TabBar},
  data() {
    return {
      tabs: [{
        title: 'add',
        route: '/add',
      }, {
        title: 'practise',
        route: '/practise',
      }

      ]
    }
  }
}
</script>

<style lang="scss">
@import "./styles/variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  &__tab-bar {
    flex-grow: 0;
  }
  &__router-view {
    flex-grow: 1;
  }
}
</style>

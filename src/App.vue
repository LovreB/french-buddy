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
  components: { TabBar},
  data() {
    return {
      tabs: [{
        title: 'Add',
        route: '/add',
      }, {
        title: 'Practise',
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
  height: 100%;
  &__tab-bar {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: $height-tabbar;
  }
  &__router-view {
    height: calc(100vh - #{$height-tabbar});
    overflow: scroll;
  }
}
</style>

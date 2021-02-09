<template>
  <div id="app" class="app">
    <AppNavBar
        class="app__nav-bar"
        :title="headerTitle"/>
    <router-view class="app__router-view"></router-view>
    <TabBar
        class="app__tab-bar"
        :tabs="tabs"/>
  </div>
</template>

<script>
import AppNavBar from "@/components/AppNavBar";
import TabBar from "@/components/TabBar";

export default {
  name: 'App',
  components: { TabBar, AppNavBar},
  data() {
    return {
      tabs: [{
        title: 'Add',
        route: '/add',
      }, {
        title: 'Practise',
        route: '/practise',
      }]
    }
  },
  computed: {
    headerTitle() {
      return this.$route.name;
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
  overscroll-behavior: none;
  position:fixed;
  width:100%;
  height:100%;
  overflow:hidden;
}
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  &__nav-bar {
     position: sticky;
  }
  &__tab-bar {            
    position: sticky;
    bottom: 0;
    width: 100%;
    height: $height-tabbar;
  }
  &__router-view {
    height: calc(100vh - #{$height-tabbar} - #{$height-navbar});
    overflow: scroll;
  }
}

html,
body {
  overscroll-behavior: none;
  position:fixed;
  width:100%;
  height:100%;
  overflow:hidden;
}
</style>

<template>
  <div class="tab-bar-tab"
    :class="{'tab-bar-tab--active': isActive}"
  >
    <router-link :to="route" class="tab-bar-tab__title">
      <img v-if="img" :src="img" class="tab-bar-tab__img"/>
      <p >{{title}}</p>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "TabBarTab",
  props: {
    img: {
      type: String,
      required: false
    },
    route: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
  },
  computed: {
    isActive() {
      return this.$route.path === this.route
    }
  }
}
</script>

<style scoped lang="scss" >
.tab-bar-tab {
  display: flex;
  &--active {
    font-weight: bold;
  }
  &__img {

  }
  &__title {
    color: white;
    text-decoration: none;
    :hover {
      opacity: 0.5;
    }
  }


}
</style>
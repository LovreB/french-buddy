<template>
  <div class="tab-bar-tab">
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
    isActive: {
      type: Boolean,
      required: false,
      default: false
    },
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
  }
}
</script>

<style scoped lang="scss" >
.tab-bar-tab {
  display: flex;
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
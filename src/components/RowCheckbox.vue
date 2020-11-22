<template>
  <div class="row-checkbox">
    <div class="row-checkbox__content">
      <p>{{title}}</p><input type="checkbox" @click="$emit('toggle')"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "RowCheckbox",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.row-checkbox {
  display: flex;
  flex-direction: row-reverse;
  &__content {
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
    align-items: baseline;
    width: 65%;
    min-width: 200px;
  }

}

</style>
<template>
  <div class="add-word-view">
    <SectionTitle title="Swedish"/>
    <div class="input-container">
      <input v-model="swedish" class="input-container__input" placeholder="swedish">
    </div>
    <SectionTitle title="French"/>
    <div class="input-container">
      <input v-model="french" class="input-container__input" placeholder="french">
    </div>
    <AppButton @click="postWord" title="Add category"/>
  </div>
</template>

<script>
import {postCategory} from "@/utils/api";
import SectionTitle from "@/components/SectionTitle";
import AppButton from "@/components/AppButton";

export default {
  name: 'AddCategoryView',
  components: { AppButton, SectionTitle},
  data() {
    return {
      swedish: '',
      french: '',
    }
  },
  methods: {
    async postWord() {
      const category =  {
        'french': this.french,
        'swedish': this.swedish,
      }
      try {
        await postCategory(category);
        this.clearTables();
      } catch (e) {
        console.log(e)
      }
    },
    clearTables() {
      this.swedish = '',
      this.french = ''
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/variables";
.input-container {
  text-align: right;
  &__input {
    width: 65%;
    min-width: 200px;
    border: 1px solid $color-primary;
    border-radius: $border-radius;
    padding: $border-radius;
    margin: 0.5em;

    &--error {
      border: 1px solid $color-error;
    }
  }
}
</style>

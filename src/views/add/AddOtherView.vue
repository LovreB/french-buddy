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
    <SectionTitle title="Category"/>
    <RowCheckbox
      v-for="category in categories"
      :key="category.id"
      :title="category.french"
      @toggle="toggleCategory(category.id)"/>
    <AppButton @click="postWord" title="Add word"/>
  </div>
</template>

<script>
import {getAllCategories, postWordOther} from "@/utils/api";
import SectionTitle from "@/components/SectionTitle";
import AppButton from "@/components/AppButton";
import RowCheckbox from "@/components/RowCheckbox";

export default {
  name: 'AddOtherView',
  components: {RowCheckbox, AppButton, SectionTitle},
  data() {
    return {
      categories: [],
      selectedCategories: [],
      swedish: '',
      french: '',
    }
  },
  created() {
    this.getCategories();
  },
  computed: {
    hasCategories() {
      return this.selectedCategories.length > 0;
    }
  },
  methods: {
    async postWord() {
      const word =  {
        'french': this.french,
        'swedish': this.swedish,
      }
      try {
        if (this.hasCategories) {
          await postWordOther(word,this.selectedCategories)
        } else {
          await postWordOther(word);
        }
        this.clearTables();
      } catch (e) {
        console.log(e)
      }
    },
    async getCategories() {
      this.categories = await getAllCategories();
    },
    toggleCategory(categoryId) {
      let wordIndex = this.selectedCategories.indexOf(categoryId);
      (wordIndex === -1) ? this.selectedCategories.push(categoryId) : this.selectedCategories.splice(wordIndex, 1)
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

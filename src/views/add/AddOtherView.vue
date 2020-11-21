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
    <AppButton @click="postWord" title="Add word"/>
  </div>
</template>

<script>
import {postWordOther} from "@/utils/api";
import SectionTitle from "@/components/SectionTitle";
import AppButton from "@/components/AppButton";

export default {
  name: 'AddVerbView',
  components: {AppButton, SectionTitle},
  props: {
    msg: String
  },
  data() {
    return {
      verb: [],
      swedish: '',
      french: '',
    }
  },
  methods: {
    async postWord() {
      const word =  {
        'french': this.french,
        'swedish': this.swedish,
      }
      try {
        await postWordOther(word);
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

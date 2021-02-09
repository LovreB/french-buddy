<template>
  <div class="add-word-view">
    <router-view/>
  </div>
</template>

<script>
import {postVerbPresent} from "@/utils/api";

export default {
  name: 'AddView',
  props: {
    msg: String
  },
  data() {
    return {
      verb: [],
      swedish: '',
      french: '',
      swPresent: '',
      frFirstSingular: '',
      frSecondSingular: '',
      frThirdSingular: '',
      frFirstPlural: '',
      frSecondPlural: '',
      frThirdPlural: '',
    }
  },
  methods: {
    async postWord() {
      const verb =  {
        'french': this.french,
        'swedish': this.swedish,
        'swPresent': this.swPresent,
        'frFirstSingular': this.frFirstSingular,
        'frSecondSingular': this.frSecondSingular,
        'frThirdSingular': this.frThirdSingular,
        'frFirstPlural': this.frFirstPlural,
        'frSecondPlural': this.frSecondPlural,
        'frThirdPlural': this.frThirdPlural,
      }
      try {
        await postVerbPresent(verb);
        this.clearTables();
      } catch (e) {
        console.log(e)
      }
    },
    clearTables() {
      this.swedish = '',
      this.french = '',
      this.swPresent = '',
      this.frFirstSingular = '',
      this.frSecondSingular = '',
      this.frThirdSingular = '',
      this.frFirstPlural = '',
      this.frSecondPlural = '',
      this.frThirdPlural = ''
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

<template>
  <div class="hello">
    <h3>New present verb</h3>
    <SectionTitle title="Swedish"/>
    <div class="input-container">
      <input v-model="swedish" class="input-container__input" placeholder="sw basic form">
      <input v-model="swPresent" class="input-container__input" placeholder="present">
    </div>
    <SectionTitle title="French"/>
    <div class="input-container">
      <input v-model="french" class="input-container__input" placeholder="fr basic form">
    </div>
    <SectionTitle title="French Singular"/>
    <div class="input-container">
      <input v-model="frFirstSingular" class="input-container__input" placeholder="1:a">
      <input v-model="frSecondSingular" class="input-container__input" placeholder="2:a">
      <input v-model="frThirdSingular" class="input-container__input" placeholder="3:e">
    </div>
    <SectionTitle title="French Plural"/>
    <div class="input-container">
      <input v-model="frFirstPlural" class="input-container__input" placeholder="1:a">
      <input v-model="frSecondPlural" class="input-container__input" placeholder="2:a">
      <input v-model="frThirdPlural" class="input-container__input" placeholder="3:e">
    </div>
    <AppButton @click="postWord" title="Add word"/>
  </div>
</template>

<script>
import {postVerbPresent} from "@/utils/api";
import SectionTitle from "@/components/SectionTitle";
import AppButton from "@/components/AppButton";

export default {
  name: 'AddWordView',
  components: {AppButton, SectionTitle},
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
@import ".././styles/variables.scss";
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

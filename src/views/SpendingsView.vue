<script>
import { useSpendingsStore } from '../stores/useSpendingsStore.vue';
import Formulaire from './../components/Formulaire.vue';
import Tableau from './../components/Tableau.vue';

export default {
  components: {
    Tableau,
    Formulaire
  },
  setup: {
    spdings: useSpendingsStore(),
    
    items: spdings.spendings
  },
  methods: {
    add: function (emitter) {
      this.items.push(emitter);
    }
  }
}
</script>
<template>
  <Tableau v-bind:items="items" />
  <Formulaire v-on:add="add" />
</template>
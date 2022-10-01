<script>
    import Formulaire from './../components/Formulaire.vue';
    import Tableau from './../components/Tableau.vue';
    
    export default {
      components: {
        Tableau,
        Formulaire
      },
      data: function() {
        return {
          items: []
        }
      },
      methods: {
        add: function (emitter) {
          this.items.push(emitter);
        }
      }
    }
    </script>
    <template>
      <Table v-bind:items="items" />
      <Form v-on:add="add" />
    </template>
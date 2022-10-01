<script>
    import Form from './../components/Form.vue';
    import Table from './../components/Table.vue';
    
    export default {
      components: {
        Table,
        Form
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
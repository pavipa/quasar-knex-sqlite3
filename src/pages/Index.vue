<template>
  <q-page class="flex flex-center">
   nada
  </q-page>
</template>

<script>
const knex = require('knex');
const connectedKnex = knex ({
  client: "sqlite3",
  connection: {
      filename:"mydb.sqlite3"
  }
});

export default {
  name: 'PageIndex',
  mounted() {
    this.getAllUsers();
  },
  methods:{
      getAllUsers() {
      connectedKnex.table('users')
        .first('name')
        .then(function(row) {
          console.log(row);
        });
    },
  }
}
</script>

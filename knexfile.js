// require("dotenv").config({path: "../.env"});
const knex = require('knex');

const connetedKnex = knex ({
  client: "sqlite3",
  connection: {
      filename:"./mydb.sqlite3"
  },
  useNullAsDefault: true
});


//knex("users").select("*").then(res => console.log(res));

module.exports = connetedKnex ;


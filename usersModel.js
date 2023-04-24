const {connetedKnex} = require('./knexfile')
const knex = require('./knexfile')

// function getAllUsers() {
//     knex("users").select("*")
//     .then( function (result) {
//           return result;    // respond back to request
//        });

// }

function getAllUsers() {
  return knex("users").select("*");
}

function createUser(req_body) {
    return knex("users").insert({name: req_body.name, surname:req_body.surname});
    // knex('user').insert({email: req.body.email})
    // .then( function (result) {
    //     res.json({ success: true, message: 'ok' });     // respond back to request
    //  })
}



module.exports = { getAllUsers, createUser }

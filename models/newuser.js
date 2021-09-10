

const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const  NewuserSchema = new Schema({
   balance: {type: Number, default: 1000},
   username: String,
   password: String,
   trophies: [Object],
   created: [Object]

})

const Newuser = mongoose.model("Newuser", NewuserSchema)

module.exports = Newuser


const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const  User1Schema = new Schema({
   balance: {type: Number, default: 1000},
   username: String,
   password: String,
   trophies: [String],
   created: [String]

})

const User1 = mongoose.model("User1", User1Schema)

module.exports = User1
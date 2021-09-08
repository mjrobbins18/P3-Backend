

const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const  User1Schema = new Schema({
   Balance: Number,
   userName: String,
   password: String,
   Trophies: [String],
   created: [String]

})

const User1 = mongoose.model("User1", User1Schema)

module.exports = User1
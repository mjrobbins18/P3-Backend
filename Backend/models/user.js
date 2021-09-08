const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const  UserSchema = new Schema({
   Balance: Number,
   userName: String,
   password: String,
   Trophies: [String],
   created: [String]

})

const User = mongoose.model("User", UserSchema)

module.exports = User
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const  UserSchema = new Schema({

    ownerUsername: String,
    ownerPic: String,
    creatorUsername: String,
    creatorPic: String,
    creatorAddress: Number
})

const User = mongoose.model("User", UserSchema)

module.exports = User
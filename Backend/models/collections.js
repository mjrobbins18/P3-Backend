const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const  CollectSchema = new Schema({

    created_date: String,
    description: String,
    featured_image_url: String,
    image_url: String,
    large_image_url: String,
    name: String,
    twitter_username: String,
    instagram_username: String,
    slug:String
})

const Collect = mongoose.model("Collect", CollectSchema)

module.exports = Collect
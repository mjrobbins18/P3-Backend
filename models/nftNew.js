const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const  NFTNewSchema = new Schema({
    token_id: String,
    background_color: String,
    image_url: String,
    animation_url: String,
    animation_original_url: String,
    name: String,
    description: String,
    external_link: String,
    permalink:String,
    banner_image_url: String,
    created_date: String,
    dev_buyer_fee_basis_points: String,
    dev_seller_fee_basis_points: String,
    opensea_buyer_fee_basis_points: String,
    opensea_seller_fee_basis_points: String,
    payout_address: String,
    slug: String,
    twitter_username: String,
    price: Number 
})


const NFTNew = mongoose.model("NFTNew", NFTNewSchema)

module.exports = NFTNew
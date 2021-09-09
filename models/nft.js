const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const  NFTSchema = new Schema({
    token_id: String,
    background_color: String,
    image_url: {type: String, default: "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"},
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
    price: {type: Number, default: 20}
})


const NFT = mongoose.model("NFT", NFTSchema)

module.exports = NFT
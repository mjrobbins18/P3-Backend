const assetsData = require('./assets.json')
const collectionsData = require('./collections.json')
const contractsData = require('./contracts.json')
const usersData = require('./users.json')
//--------------------------------------------------------------------------------------------------
const NFT = require('../models/nft')
const Collect = require('../models/collections')
const User = require('../models/user')
const Contract = require('../models/contract')
//---------------------------------------------------------------------------------------------------

// const nftData = assetsData.map(item =>(item.id && item.tokenid && item.background_color && item.image_url && image_preview_url && item.image_original_url && item.animation_url && item.animation_original_url && item.name && item.description && item.external_link && item.permalink ) ? {nftid:item.id, cryptoid:item.tokenid, display_background:item.background_color, main_image:item.image_url, mainimg_backup:item.image_preview_url, smallmain_img: item.image_original_url, animation_url: item.animation_url, animation_original_url: item.animation_original_url, nft_name: item.name, nft_description: item.description, external_link: item.external_link, opensea_link: item.permalink} : null )



// NFT.deleteMany({})
//     .then(() => NFT.insertMany(assetsData))
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => process.exit())



// Collect.deleteMany({})
//     .then(() => Collect.insertMany(collectionsData))
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => process.exit())


// User.deleteMany({})
//     .then(() => User.insertMany(usersData))
//     .then(console.log)
//     .catch(console.error)


// Contract.deleteMany({})
//     .then(() => Contract.insertMany(contractsData))
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => process.exit())
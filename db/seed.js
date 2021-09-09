const assetsData = require('./assets.json')
const collectionsData = require('./collections.json')
const contractsData = require('./contracts.json')
const usersData = require('./users.json')
const user1Data = require('./user1.json')
//--------------------------------------------------------------------------------------------------
const NFT = require('../models/nft')
const Collect = require('../models/collections')
const User = require('../models/user')
const User1 = require('../models/user1')
const Contract = require('../models/contract')
//---------------------------------------------------------------------------------------------------

// const userData = usersData.map (
//     item =>
//       item.owner.username &&
//         item.owner.profile_img_url &&
//         item.seller.username &&
//         item.seller.profile_img_url &&
//         item.seller.address
//         ? {
//             ownerUsername: item.owner.username,
//             ownerPic: item.owner.profile_img_url,
//             creatorUsername: item.seller.username,
//             creatorPic: item.seller.profile_img_url,
//             creatorAddress: item.seller.address
//           }
//         : null
//   );



NFT.deleteMany({})
    .then(() => NFT.insertMany(assetsData))
    .then(console.log)
    .catch(console.error)
    .finally(() => process.exit())



// Collect.deleteMany({})
//     .then(() => Collect.insertMany(collectionsData))
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => process.exit())



User.deleteMany({})
    .then(() => User.insertMany(userData))
    .then(console.log)
    .catch(console.error)
    .finally(()=> process.exit())

User1.deleteMany({})
.then(() => User1.insertMany(user1Data))
.then(console.log)
.catch(console.error)
.finally(()=> process.exit())



// Contract.deleteMany({})
//     .then(() => Contract.insertMany(contractsData))
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => process.exit())
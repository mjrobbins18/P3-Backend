const express = require('express')
const router = express.Router()

const NFT = require('../models/nft')



router.get("/", (req, res) => {

    NFT.find({})
   .then(nfts => res.send(nfts))
   .catch(console.error);

   
})

router.get('/:id/person', (req, res) => {
    
    console.log(`params ID: ${req.params.id}`)
    NFT.findById(req.params.id)
        .then( nfts => {
            res.json(nfts)
        })
        .catch(whoops => {
            console.error(whoops)
            res.send("something has gone terribly wrong!")
        })
})





//Delete Route
//-------------------------------------------------------------------

    module.exports = router   
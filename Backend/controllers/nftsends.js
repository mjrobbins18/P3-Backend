const express = require('express')
const router = express.Router()


const NFT = require('../models/nft')

//INDEX Route
//-------------------------------------------------------------------
router.get("/", (req, res) => {

    NFT.find({})
   .then(nfts => res.send(nfts))
   .catch(console.error);

   
})
//Create Route
//----------------------------------------------------------------------
router.post('/new', (req, res) => {
    
    console.log(req.body)

    NFT.create(req.body)
        .then(nfts => {
            res.redirect('/nftmarketplace/gallery')
        })
        .catch(console.error)
    })

//--------------------------------------------------------------------


//Show 1 Specific NFT (Must Be Last Get Route)

router.get('/:id', (req, res) => {
    
    console.log(`params ID: ${req.params.id}`)
    NFT.findById(req.params.id)
        .then( nfts => {
            res.send(nfts)
        })
        .catch(whoops => {
            console.error(whoops)
            res.send("something has gone terribly wrong!")
        })
})

//Edit NFT
//------------------------------------------------------------------------

router.get('/:id/nftedit', (req, res) => {

    const id = req.params.id
    NFT.findById(id)
        .then( people => {
            res.send(nfts)
        })
        .catch(console.error)
} )

router.put('/:id/nftedit' ,(req, res) => {
    // res.send(`you made it to a PUT on id: ${req.params.id}`)
    const id = req.params.id
    NFT.findOneAndUpdate(
        {_id: id},
        {
            title: req.body.title,
            complete: req.body.complete === 'on'
        },
        {new: true}
    )
        .then( nfts => {
            res.send(nfts)
        })
        .catch(console.error)
        })

//---------------------------------------------------------------------------------
// //Delete NFT  Routes

router.delete('/:id', (req, res) => {
    NFT.findByIdAndRemove({_id: req.params.id})
        .then( () => {
            res.redirect('/nftmarketplace/gallery')
        })
        .catch(console.error)
})

    module.exports = router   
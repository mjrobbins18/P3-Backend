const express = require('express')
const router = express.Router()

// Model Import

const NFT = require('../models/nft')
//-----------------------------------------------------------------------------------------------------------------

// CRUD ROUTES BELOW:

router.get("/", (req, res) => {

    NFT.find({})
    .then(nfts => {
    res.render('./nftmarketplace/index', {nfts})
    })
    .catch(console.error);
})

router.get("/gallery", (req, res) => {

    NFT.find({})
    .then(nfts => {
    res.render('./nftmarketplace/gallery', {nfts})
    })
    .catch(console.error);
})
//----------------------------------------------------------

//Create Route JSON
router.get("/new", (req, res) => {

    res.render('./nftmarketplace/new')
})
router.post('/new', (req, res) => {
    
    console.log(req.body)

    NFT.create(req.body)
    .then((nfts) => {
        res.json(nfts)
    })
    // .then(() => {
    //         res.redirect('/nftmarketplace/gallery')
    //     })
    //     .catch(console.error)
    })
//Creat New User
//----------------------------------------------------------------------------
router.get("/signup", (req, res) => {

    res.render('./nftmarketplace/signup')
})
//Edit NFT
//------------------------------------------------------------------------

router.get('/:id/nftedit', (req, res) => {

    const id = req.params.id
    Person.findById(id)
        .then( people => {
            res.json(people)
        })
        .catch(console.error)
} )

router.patch('/:id/personedit' ,(req, res) => {
    // res.send(`you made it to a PUT on id: ${req.params.id}`)
    const id = req.params.id
    Person.findOneAndUpdate(
        {_id: id},
        {
            title: req.body.title,
            complete: req.body.complete === 'on'
        },
        {new: true}
    )
        .then( people => {
            res.json(people)
        })
        .catch(console.error)
        })

//---------------------------------------------------------------------------------
// //Delete NFT  Routes

router.delete('/:id', (req, res) => {
    Person.findByIdAndRemove({_id: req.params.id})
        .then( () => {
            res.redirect('/people')
        })
        .catch(console.error)
})

//Show Routes
//--------------------------------------------------------------
router.get('/:id/collection', (req, res) => {
    
    console.log(`params ID: ${req.params.id}`)
    NFT.findById(req.params.id)
        .then( nfts => {
            res.render('./nftmarketplace/collection', nfts)
        })
        .catch(oopsie => {
            console.error("oops")
            res.send("something has gone terribly wrong!")
        })
})
router.get('/:id/contract', (req, res) => {
    
    console.log(`params ID: ${req.params.id}`)
    NFT.findById(req.params.id)
        .then( nfts => {
            res.render('./nftmarketplace/contract', nfts)
        })
        .catch(oopsie => {
            console.error("oops")
            res.send("something has gone terribly wrong!")
        })
})
router.get('/:id', (req, res) => {
    
    console.log(`params ID: ${req.params.id}`)
    NFT.findById(req.params.id)
        .then( nfts => {
            res.render('./nftmarketplace/show', nfts)
        })
        .catch(oopsie => {
            console.error("oops")
            res.send("something has gone terribly wrong!")
        })
})
module.exports = router
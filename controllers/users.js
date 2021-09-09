const express = require('express')
const router = express.Router()

const Newuser = require('../models/newuser')

//INDEX Route
//-------------------------------------------------------------------
router.get("/", (req, res) => {

    Newuser.find({})
   .then(newusers => res.send(newusers))
   .catch(console.error);

   
})

router.get('/collections', (req, res) => {
    Newuser.find({})
    .then(newusers => res.send(newusers))
    .catch(console.error)
})

//Create Route
//----------------------------------------------------------------------
router.post('/new', (req, res) => {
    
    console.log(req.body)
    console.log("hello")
    Newuser.create(req.body)
        .then((newusers) => {
            res.json(newusers)
            console.log(req.body)
            console.log("hello")
        })
        .catch(console.error)
    })

//--------------------------------------------------------------------


//Show 1 Specific Newuser (Must Be Last Get Route)

router.get('/:id', (req, res) => {
    
    console.log(`params ID: ${req.params.id}`)
    Newuser.findById(req.params.id)
        .then( newusers => {
            res.send(newusers)
        })
        .catch(whoops => {
            console.error(whoops)
            res.send("something has gone terribly wrong!")
        })
})
// show nft by name

router.get('/name/:name', (req, res) => {
    Newuser.find({ name: { $regex: req.params.name, $options: "i" }})
    
    .then(newusers => {
        res.json(newusers)
    })
    .then(req => console.log(req))
    .catch(console.error)
})

//Edit Newuser
//------------------------------------------------------------------------

router.put('/:id' ,(req, res) => {
   
    Newuser.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true}
    )
        .then( newusers => {
            res.json(newusers)
        })
        .then(req => console.log(req.body))
        .catch(console.error)
        })

//---------------------------------------------------------------------------------
// //Delete Newuser  Routes

router.delete('/:id', (req, res) => {
    Newuser.findByIdAndDelete({_id: req.params.id})
        .then((newusers) => {
            res.json(newusers)
        })
        .then((req) => console.log(req))
        .catch(console.error)
})

    module.exports = router   
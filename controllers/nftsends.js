const express = require ('express');
const router = express.Router ();

const Collection = require ('../models/collections');
// const NFT = require ('../models/nft');
const NFTNew = require ('../models/nftNew');
const newUser = require('../models/newuser')

//INDEX Route
//-------------------------------------------------------------------
// router.get ('/', (req, res) => {
//   NFT.find ({}).then (nfts => res.send (nfts)).catch (console.error);
// });
//NFTNew inclusion ------------ 
router.get ('/newfind', (req, res) => {
  NFTNew.find ({}).then (nftnews => res.send (nftnews)).catch (console.error);
});
//get collections
// router.get ('/collections', (req, res) => {
//   Collection.find ({})
//     .then (collects => res.send (collects))
//     .catch (console.error);
// });

//Create Route
//----------------------------------------------------------------------
// router.post ('/new', (req, res) => {
//   console.log (req.body);
//   console.log ('hello');
//   NFT.create (req.body)
//     .then (nfts => {
//       res.json (nfts);
//       console.log (req.body);
//       console.log ('hello');
//     })
//     .catch (console.error);
// });
//NFTNew inclusion ------------ 
router.post ('/new', (req, res) => {
  console.log (req.body.image_url);
  console.log ('hello');
  NFTNew.create (req.body)
    .then (nftnews => {
      res.json (nftnews);
      console.log (req.body.image_url);
      console.log ('hello');
    })
    .catch (console.error);
});

//--------------------------------------------------------------------

//Show 1 Specific NFT (Must Be Last Get Route)

router.get ('/:id', (req, res) => {
  console.log (`params ID: ${req.params.id}`);
  NFT.findById (req.params.id)
    .then (nfts => {
      res.send (nfts);
    })
    .catch (whoops => {
      console.error (whoops);
      res.send ('something has gone terribly wrong!');
    });
});
//NFTNew inclusion ------------ 
router.get ('/new/:id', (req, res) => {
  console.log (`params ID: ${req.params.id}`);
  NFTNew.findById (req.params.id)
    .then (nfts => {
      res.send (nfts);
    })
    .catch (whoops => {
      console.error (whoops);
      res.send ('something has gone terribly wrong!');
    });
});
// show nft by name

router.get ('/name/:name', (req, res) => {
  NFT.find ({name: {$regex: req.params.name, $options: 'i'}})
    .then (nfts => {
      res.json (nfts);
    })
    .then (req => console.log (req))
    .catch (console.error);
});
//NFTNew inclusion ------------ 
router.get ('/new/name/:name', (req, res) => {
  NFTNew.find ({name: {$regex: req.params.name, $options: 'i'}})
    .then (nfts => {
      res.json (nfts);
    })
    .then (req => console.log (req))
    .catch (console.error);
});



//Edit NFT
//------------------------------------------------------------------------

// router.put ('/:id', (req, res) => {
//   NFT.findOneAndUpdate ({_id: req.params.id}, req.body, {new: true})
//     .then (nfts => {
//       res.json (nfts);
//     })
//     .then (req => console.log (req.body))
//     .catch (console.error);
// });
//NFTNew inclusion ------------ 
router.put ('/new/:id', (req, res) => {
  NFTNew.findOneAndUpdate ({_id: req.params.id}, req.body, {new: true})
    .then (nftnews => {
      res.json (nftnews);
    })
    .then (req => console.log (req.body))
    .catch (console.error);
});

//---------------------------------------------------------------------------------
// //Delete NFT  Routes

// router.delete ('/:id', (req, res) => {
//   NFT.findByIdAndDelete ({_id: req.params.id})
//     .then (nfts => {
//       res.json (nfts);
//     })
//     .then (req => console.log (req))
//     .catch (console.error);
// });
//NFTNew inclusion ------------ 
router.delete ('/new/:id', (req, res) => {
  NFTNew.findByIdAndDelete ({_id: req.params.id})
    .then (nftnews => {
      res.json (nftnews);
    })
    .then (req => console.log (req))
    .catch (console.error);
});

module.exports = router;

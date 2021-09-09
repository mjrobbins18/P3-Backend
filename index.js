const express = require('express')
const path = require('path')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs')  

app.use(express.static(path.join(__dirname, 'public')))



// controllers go here
const nftsController = require('./controllers/nfts')
const usersController = require('./controllers/users')

const nftjsonController = require('./controllers/nftjson')

const nftSendsController = require('./controllers/nftsends')
app.use('/nftmarketplace', nftsController)
//login token

app.use('/login', (req,res) => {
  res.send({
    token: 123456789
  })
} )
// app.use('/nftmarketplace', nftjsonController)
// app.use('/nftmarketplace', nftSendsController)
// app.use('/nftmarketplace', usersController)
/* END CONTROLLERS HERE */

app.set('port', process.env.PORT || 8001);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});


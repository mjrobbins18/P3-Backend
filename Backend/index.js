const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs')  

app.use(express.static(path.join(__dirname, 'public')))



// controllers go here
const nftsController = require('./controllers/nfts')
const usersController = require('./controllers/users')
const nftjsonController = require('./controllers/nftjson')
// app.use('/nftmarketplace', nftsController)
app.use('/nftmarketplace', nftjsonController)
// app.use('/nftmarketplace', usersController)
/* END CONTROLLERS HERE */

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});


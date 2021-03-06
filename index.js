const express = require('express')
const path = require('path')
const app = express()
//passport
const passport = require("passport")


const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs')  

app.use(express.static(path.join(__dirname, 'public')))

//passport middleware
app.use(passport.initialize())
//passport config
require("./models/passport")(passport)


// controllers go here
// const nftsController = require('./controllers/nfts')
const usersController = require('./controllers/users')

const nftjsonController = require('./controllers/nftjson')

const nftSendsController = require('./controllers/nftsends')

const users = require('./controllers/users')
// app.use('/nftmarketplace', nftsController)
app.use('/api/users', users)


// app.use('/nftmarketplace', nftjsonController)

app.use('/nftmarketplace', nftSendsController)

// app.use('/nftmarketplace', usersController)
/* END CONTROLLERS HERE */

app.set('port', process.env.PORT || 8001);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});


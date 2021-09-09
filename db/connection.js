const mongoose = require('mongoose')

const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : 'mongodb://localhost/NFTMarket';

mongoose.Promise = Promise

mongoose.connect(mongoURI)

.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error('Connection failed!',err)
})


module.exports = mongoose
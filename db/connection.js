const mongoose = require('mongoose')

url = "mongodb+srv://dbUser:n6DaQ5TP7VjQ76m@cluster0.i0e2s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const localurl ='mongodb://localhost/NFTMarket'
const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : 'mongodb://localhost/NFTMarket';

mongoose.Promise = Promise


mongoose.connect(url , { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false,})


.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error('Connection failed!',err)
})


module.exports = mongoose
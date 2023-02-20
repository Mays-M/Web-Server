require('dotenv').config()
const express = require('express')
const app = express()
const connectMongoDB = require('./db/mongodb')
const { PORT, MONGO_URI } = process.env

const albums = require('./routes/albums')
const query = require('./routes/query')
const errorHandler = require('./middleware/errorhandler')

// static assets
app.use(express.static('./public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/albums', albums)
app.use('/api/query', query)

app.use(errorHandler)

connectMongoDB(MONGO_URI)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`) 
})

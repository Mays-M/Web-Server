const express = require('express')
const app = express()
// json parser middleware that takes the json data and assigns it to the requests body
// so that it can be accessed in the route handler
app.use(express.json())

const albumRouter = require('./routes/album')
const logger = require('./middleware/logger')

app.use(logger)
app.use('/api/album', albumRouter)

const PORT = 5001
app.listen(PORT, ()=> {
  console.log(`server listening on port ${PORT}...`)
})

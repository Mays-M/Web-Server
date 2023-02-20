const express = require('express')
const app = express()
const { albums } = require('./albums')

app.get('/', (req, res) => {
  res.json(albums)
})

const PORT = 5001
app.listen(PORT, ()=> {
  console.log(`Server listening on port ${PORT}`)
})
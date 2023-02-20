const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
 name: String,
  title: String,
  
})

module.exports = mongoose.model('album', albumSchema)

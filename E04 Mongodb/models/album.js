const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
    maxLength: 30,
  },
  model: String,
  type: {
    type: String,
    required: true
  },
  license_plate : String
})

module.exports = mongoose.model('Album', albumSchema)

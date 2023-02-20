const Album = require('../models/album')

const query = async (req, res) => {
  // looking for the search phrase in req.query
  const { search } = req.query

  if (search) {
    const ALBUMS = await Vehicle.find({$or: [{make: {$regex: `${search}` }}, {model: {$regex: `${search}`} }]})

    if (Albums.length < 1) {
      return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json({ success: true, data: vehicles })
  }
}

module.exports = { query }
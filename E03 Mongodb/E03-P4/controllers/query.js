const album = require('../models/album')

const query = async (req, res) => {
  // looking for the search phrase in req.query
  const { search } = req.query

  if (search) {
    const albums = await album.find({$or: [{name: {$regex: `${search}` }}, {title: {$regex: `${search}`} }]})

    if (albums.length < 1) {
      return res.status(200).json({ success: true, data: [] })
    }
  res.status(200).json({ success: true, data: albums })
  }
}

module.exports = { query }
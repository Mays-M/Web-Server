const album = require('../models/album')

const getAlbums = async (req, res) => {
  const albums = await album.find({})
  res.status(200).json({ success: true, data: albums })
}

const createAlbum = async (req, res) => {
  const { name, title } = req.body
  if (!name || !title) {
    return res
      .status(400)
      .json({ success: false, msg: 'Both fields required' })
  }
  const type = Math.round(Math.random()) > 0 ? "Love" : "Rakas"

  const vehicle = new album({
    name,
    title,
  })
  await album.save()
  res.status(201).send({ success: true, data: album })
}

const getSingleAlbum = async (req, res) => {
  const { id } = req.params
  try {
    const vehicle = await album.findById(id)
    if (!album) {
      return res
      .status(404)
      .json({ success: false, msg: `No album found with id ${id}` })
    }
    return res.status(200).json({ success: true, data: vehicle })
  } catch (error) {
    console.log(error)
  }
}

const updateAlbum = (req, res) => {
  res.status(501).json({ success: true, msg: "not implemented" })
}
  const deleteAlbum = (req, res) => {
    res.status(501).json({ success: true, msg: "not implemented" })

}

module.exports = {
  getAlbums,
  createAlbum,
  getSingleAlbum,
  updateAlbum,
  deleteAlbum,
}

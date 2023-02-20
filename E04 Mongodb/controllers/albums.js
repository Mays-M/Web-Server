const Vehicle = require('../models/album')

const getAlbums = async (req, res) => {
  const albums = await album.find({})
  res.status(200).json({ success: true, data: album })
}

const createAlbum = async (req, res) => {
  const { make, model, license_plate } = req.body
  if (!make || !model) {
    return res
      .status(400)
      .json({ success: false, msg: 'Both fields required' })
  }
  const type = req.body.type || (Math.round(Math.random()) > 0 ? 'Van' : 'Passenger car')
  try {
    const album = new Album({
      make,
      model,
      type,
      license_plate
    })
    await album.save()
    return res.status(201).send({ success: true, data: vehicle })
  } catch (error) {
    if (error.name === 'ValidationError') {
      let errors = {}
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message
      })
      return res.status(400).send(errors)
    }
    res.status(500).send({ success: false, msg: error.message })
  }
}

const getSingleAlbum = async (req, res) => {
  const { id } = req.params
  try {
    const album= await Album.findById(id)
    if (!album) {
      return res
      //eslint-disable-next-line
      .status(404).json({ success: false, msg: `No vehicle found with id ${id}` })
    }
    return res.status(200).json({ success: true, data: album })
  } catch (error) {
    console.log(error)
  }
}

const updateAlbum = async (req, res) => {
  const { id } = req.params
  const { make } = req.body
  try {
    const album = await Album.findById(id)
    if (!album) {
      return res
      //eslint-disable-next-line
      .status(404).json({ success: false, msg: `No album found with id ${id}` })
    }
    vehicle.make = make
    const updatedAlbum = await album.save()
    return res.status(200).json({ success: true, data: updatedVehicle })
  } catch (error) {
    if (error.name === 'ValidationError') {
      let errors = {}
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message
      })
      return res.status(400).send(errors)
    }
    res.status(500).send({ success: false, msg: error.message })
  }
}
  
const deleteAlbum = async (req, res) => {
  const { id } = req.params
  try {
    const album = await Album.findById(id)
    if (!album) {
      return res
        .status(404)
        .json({ success: false, msg: `No Album found with id ${id}` })
    }
    await Vehicle.findByIdAndRemove(id)
    res.status(200).json({ success: true })
  } catch (error) {
    res.status(500).send({ success: false, msg: error.message })
  }
}

module.exports = {
  getAlbums,
  createAlbum,
  getSingleAlbum,
  updateAlbum,
  deleteAlbum
}

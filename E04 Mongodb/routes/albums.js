const express = require('express')
const router = express.Router()

const {
  getAlbums,
  createAlbum,
  getSingleAlbum,
  updateAlbum,
  deleteAlbum,
} = require('../controllers/albums')


router.get('/', getAlbums)
router.post('/', createAlbum)
router.get('/:id', getSingleAlbum)
router.put('/:id', updateAlbum)
router.delete('/:id', deleteAlbum)

module.exports = router

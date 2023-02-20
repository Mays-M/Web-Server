const albumRouter = require('express').Router()

const {
  getAlbum,
  createArt
} = require('../controller/album')

albumRouter.route('/').get(getAlbum).post(createArt)
module.exports = albumRouter

let { album } = require('../data')

const getAlbum = (_req, res)=>{
  res.status(200).json({success:true,data:album})
}

const createArt = (req,res)=>{
  const name = req.body.name
  // alternative syntax
  // const {name} = req.body
  if(!name){
    return res.status(400).json({success:false})
  }
  // ID creation is for testing purposes only, this will be omitted when we convert to using databases
  const maxId = Math.max(...album.map(art => art.id), 0)
  const newID = (maxId+1)
  const art = {
    id:newID,
    name,
  }
  album = album.concat(art)
  res.status(201).json({success:true,art})
}
module.exports = {getAlbum, createArt}

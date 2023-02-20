const mongoose=require('mongoose')

const albumSchema =new mongoose.Schema({

    "id": {type: Number, require:true},
    "name": {type: String, require:true},
    "title": {type: String, require:true},
    "year": {type: Number, require:true},
    "genre": {type: String, require:true},
    "tracks": {type: Number, require:true}
})

module.exports=mongoose.model("album", albumSchema)
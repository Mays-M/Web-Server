const router = require("express").Router();
const Album= require('../model/Album')
const album= require('../config/albums.json')

router.get('/albums', async(req, res)=>{

    try {
        const page =parseInt(req.query.page) -1 || 0
        const limit =parseInt(req.query.limit) || 5
        const search = req.query.search|| ""
        
        let sort =req.query.sort || "rating"
        let genre=req.query.genre || "All"
    const genreOptions=[
        "Pop",
        "Jazz Rock",
        "Jazz"
       ]

    genre === "All"
       ?(genre = [...genreOptions])
       :(genre = req.query.genre.split(","))
       req.query.sort? (sort = req.query.sort.split(",")):(sort=[sort])

       let sortBy ={}
       if (sort[1]){
        sortBy[sort[0]]=sort[1];

       } else{
        sortBy[sort[0]]='asc'
       }

    const albums=await Album.find({name:{$regex:search, $options:"i"}})
      .where('genre')
      .in(...genre)
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit)

    const total=await Album.countDocuments({
        genre :{$in:[...genre]},
        name:{$regex:search, $options:"i"},
    })

   const response={
    error:false,
    total,
    page:page+1,
    limit,
    genre:genreOptions,
    album,

   }

res.status(200).json(response)


    }
    catch(err){
    console.log(err)
    res.status(500).json({error:true, message: 'Internal Server Error'})
    }
})


module.exports= router
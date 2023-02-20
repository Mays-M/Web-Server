
require('dotenv').config();
const express = require('express')
const cors =require('cors')
const dbConnect = require('./dbConnect');
const albumRoutes= require("./routes/albums")
const app = express()


dbConnect()
app.use(express.json());
app.use(cors());
app.use('/api', albumRoutes)
const port=process.env.PORT ||5002

app.listen(port, ()=> {
  console.log(`Server listening on port ${port}`)
})
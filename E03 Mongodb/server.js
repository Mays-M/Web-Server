const express = require("express");
const mongoose= require("mongoose");
const app =express();
const url="mongodb+srv://Mays:Love4488@cluster0.sm6r11k.mongodb.net/?retryWrites=true&w=majority"

async function connect()
{
    try{
        await mongoose.connect(url);
        console.log("connected to MongoDB");

    }
    catch(error)
    {
        console.error(error);

    }
}
    connect();
    app.listen(8000,()=>{
        console.log("server startes on poert 8000");

    })

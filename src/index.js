// require('dotenv').config({path: "./env"});   // it affects the consistency of our code
// this path in config says that .env is in home directory itself
import dotenv from "dotenv";

dotenv.config({
    path:'./.env'
})

import app from "./app.js"
import connectDB from "./db/db.js";

//we written connectDB an async method so it also returns promise,thats why we can write .then and .catch 
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`app is running on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Error in connection of mongodb: ",error);
})
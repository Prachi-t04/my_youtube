import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();


app.use(cors({                    //middleware for cors policy allow to the frontend url to send the req
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


app.use(express.json({  limit:"10kb"}))  //for the express to process the form data format(req.body mostly)
   

app.use(urlencoded({  // url me data aayega use process krne ke liye ye configuration hai (req.params)
    extended:true,  //extended me hum object ke andar bhi de sakte haii--> as such not required much
    limit:"10kb"
}))

app.use(express.static("public"))
//static matlab agar hume apne server pe koi files ya kuch rakhnar hoga to , 
// public is folder name as we created here

app.use(cookieParser())
//mai apne server se user ka brower access kr saku aur uski cookies set kr saku
//basically uske cookie pe crud operation perform kr pavu
//secure cookies ko server hi read kr skata hai aur server hi remove kr sakta hai

export default app;

import mongoose from "mongoose";


 const connectDB = async function connectDB(){
   try{
  const connectionInstance =  await mongoose.connect(process.env.MONGO_URI);
  console.log(`connected to mongodb!`)
   }catch(error){
   console.log(" mongodb connection error :",error)
   }
}

export default connectDB;
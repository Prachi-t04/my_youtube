import {v2 as cloudinary} from "cloudinary";
//this fs=file system is already there with nodejs not need to install
//
import fs from "fs";


cloudinary.config({ 
  cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
  api_key: 'process.env.CLOUDINARY_API_KEY', 
  api_secret: 'process.env.CLOUDINARY_API_SECRET'
});


const uploadOnCloudinary = async (localFilePath)=>{
     try{
       if(!localFilePath){
        return null;
       }
       //upload file on cloudinary
         const response = await cloudinary.uploader.upload(localFilePath,{
         resource_type:"auto"
         })
         // file  uploaded sucessfully
         console.log("file uploaded successfully", response.url);
         return response;
     } catch(error) {
        fs.unlinkSync(loaclFilePath)  //remove the locally saved temporary files
                                   //as the upload operation got failed
        return null;
     }
}



export { uploadOnCloudinary }



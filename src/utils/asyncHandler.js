
//async handler ka code bar bar na likhnar pade isliye iski 
// ek method bana ke usme sara code rap krke export kr dete haii


//written with promises
// const asyncHandler = (requestHandler)=>{
//   (req,res,next)=>{
//     Promise.resolve(requestHandler(req, res, next))
//     .catch((err)=> next(err));
//   }
// }



//written with try-catch method
 
const asyncHandler = (fn)=> async (req,res,next) =>{
  try{
     await fn(req, res, next) 
  }catch(error){
    res.status(error.code || 500).json({
        success:false,
        message:error.message
    })
  }
}

export { asyncHandler }
const filerouter=require("express").Router();
const filesystem=require("fs")
const path=require("path")
const {getfilename} =require("../utils/calendar")


filerouter.post("/createfile",function (req,res,next){
    const {message}=req.body
    const path=`./filesystem/${getfilename(new Date())}`;
   
   try{
         filesystem.writeFileSync(path,message); 
         return  res.status(200).json({
         message:"file create successfully",
    })
}
    catch(error) {
    return res.status(501).json({
        message:'error creating file'
    })
    }
   })

module.exports=filerouter
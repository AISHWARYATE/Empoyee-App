const express=require('express')
const registerModel = require('../model/regData')
const regRouter = express.Router();
const multer=require('multer')

const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'../client/employee/public/upload/')
  },
  filename:function(req,file,cb){
    cb(null,req.body.name)
  }
})
const upload=multer({storage:storage})
regRouter.post('/upload',upload.single("file",(req,res)=>{
  return res.json("file uploaded")
}))
regRouter.post('/check-register',async(req,res)=>{
    try {
        const{name,email,phonenumber,qualification,experience,image,address,password}=req.body
        const result = await registerModel.create({name,email,phonenumber,qualification,experience,image,address,password}) // insert data to register table 
        console.log(result);
        if(result){
          return res.status(200).json({
            success: false,
            error: true,
            message:"Registration  successfull"
          })
        }
        
    }catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message:"something went wrong" 
          })
        
    }
})
//---------------Login---------------------------
regRouter.post('/check-login',async(req,res)=>{
  try {
    const{email,password}=req.body
    const oldu=await registerModel.findOne({email})
    console.log(oldu);
    if(!oldu){
      return res.status(400).json({
             success:false,
             error:true,
             message:"this email not matching "
       })
     }
     console.log(oldu.password);
     if(oldu.password!=password){
       return  res.status(400).json({
        success:false,
        error:true,
        message:"this password not matching"
        })
     }

       return res.status(200).json({
         success:true ,
         error: false,
         data:oldu,
         message:"  successfull logined"
       })
     
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message:"something went wrong" 
    })   
  }
})
//----------view all user in json format-----------
 regRouter.get('/view-user',async(req,res)=>{
  try {
    const user =await registerModel.find()
    res.status(200).json({
      success:true,
      error:false,
      details:user,
    })
  } catch (error) {
    console.log(error);
    
  }
 })
 
//--------viewAll-----------------------
regRouter.get('/view-user',async(req,res)=>{
  try {
    const user =await registerModel.find()
    res.status(200).json({
      success:true,
      error:false,
      details:user,
    })
  } catch (error) {
    console.log(error);  
  }
 })

 //------------view-single-user------------
 regRouter.get('/view-singleuser/:id',async(req,res)=>{
  try {
    const id= req.params.id
    const singleuser= await registerModel.findOne({_id:id})
    res.status(200).json({
      success:true,
      error:false,
      data:singleuser,

    })
  } catch (error) {
    console.log(error);
  }

 })

 //----------deleting----------------------------
 regRouter.get('/delete/:id',async(req,res)=>{
  try{
    const id=req.params.id
    const data=await registerModel.deleteOne({_id:id})
    
         res.status(200).json({
          success:true,
          error:false,
          data:data,
      })  
     }catch(error){  
      console.log(error);   
     }
 })

 //-----------updating----------------
 regRouter.post('/update/:id',async(req,res)=>{
  var Data={
    name :req.body.name,
    email :req.body.email,
    phonenumber :req.body.phonenumber,
    qualification :req.body.qualification,
    experience :req.body.experience,
    address :req.body.address
  }
  try{
    const id=req.params.id
    const user=await registerModel.updateOne({_id:id},{$set:Data})
    
         res.status(200).json({
          success:true,
          error:false,
          data:user,
      })  
     }catch(error){  
      console.log(error);   
     }
 })
module.exports= regRouter


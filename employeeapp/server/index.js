const bodyParser=require('body-parser')
const express=require('express') 
var cors = require('cors');
const regRouter = require('./src/routes/regRouter')
const app=express()
const multer=require('multer')

app.use(cors())
app.use(bodyParser())
app.use(express.urlencoded({ extended: true}))

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader( "Access-Controll-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authentication");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS");
  next();
});

app.use('/register',regRouter)
app.listen(2000,()=>
{
  console.log("server starte at port http://localhost:2000");
})


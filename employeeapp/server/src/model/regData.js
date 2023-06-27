const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aiswaryate704:aiswaryate704@cluster0.higp5vj.mongodb.net/employee_db?retryWrites=true&w=majority')
const Schema = mongoose.Schema

const registerSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phonenumber:{type:String,required:true},
    qualification:{type:String,required:true},
    experience:{type:String,required:true},
    image:{type:String,required:true},
    address:{type:String,required:true},
    password:{type:String,required:true},

}) 

const registerModel=mongoose.model('employee_tb',registerSchema)
module.exports=registerModel
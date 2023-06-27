import React, { useState } from 'react'
import './Addemployee.css';
import axios from "axios"
export default function Addemployee() {
  const [details,setDetails] = useState({
    name:"",
    email:"",
    phonenumber:"",
    qualification:"",
    experience:"",
    image:"",
    address:"",
    password:""
  })

  const [file,setFile] =useState("")
  console.log(file)
  const change = (e)=>{ 
    const {name,value} = e.target
    setDetails({...details,[name]:value})
  }

  const sub =(e)=>{
    e.preventDefault()

    if(file){
      const data=new FormData();
      const filename=file.name
      data.append("name",filename)
      data.append("file",file)
      console.log("filedata",data);
      axios.post(`http://localhost:2000/register/upload`,data).then((response)=>{
        console.log(response);
      })
    }
    console.log("state",details);
    axios.post(`http://localhost:2000/register/check-register`,details).then((response)=>{
      console.log("response----",response);
      const data=response.details
      console.log("data---",data)
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <>
    <center>
      <h1>Registration</h1>
      <form>
    <div class="box1">
    <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label" >Name</label>
   <input type="text" class="form-control" id="exampleFormControlInput1" name='name' onChange={change} />
   </div>
   <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label" >email</label>
   <input type="email" class="form-control" id="exampleFormControlInput1" name='email' onChange={change}/>
   </div>
   <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label"> phone number</label>
   <input type="text" class="form-control" id="exampleFormControlInput1" name='phonenumber' onChange={change}  />
   </div>
   <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label">Qualification</label>
   <input type="text" class="form-control" id="exampleFormControlInput1" name='qualification' onChange={change}/>
   </div>
   <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label">Experience</label>
   <input type="text" class="form-control" id="exampleFormControlInput1" name='experience' onChange={change} />
   </div>
   <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label">upload photo</label>
   <input type="file" name='image' onChange={(e)=>{setFile(e.target.files[0]); console.log(e.target.files[0]); setDetails({...details,image:e.target.files[0].name})}} class="form-control" id="exampleFormControlInput1" />
   </div>
   <div class="mb-3">
   <label for="exampleFormControlTextarea1" class="form-label">Address</label>
   <textarea class="form-control"
   id="exampleFormControlTextarea1" rows="2" name='address' onChange={change}></textarea> 
   </div>
   <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label">password</label>
   <input type="password" class="form-control" id="exampleFormControlInput1" name='password' onChange={change}/>
   </div>
   <button type="button" onClick={sub} class="btn btn-primary btn-lg">SUMBIT</button>
   </div>
      </form>
      </center>
    </>
  )
}

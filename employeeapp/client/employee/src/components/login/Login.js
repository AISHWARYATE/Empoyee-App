import React, { useState } from 'react'
import './Login.css';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate =useNavigate() // usenavigate hook
  const [details,setDetails] = useState({
    email:"",
    password:""
  })
   
  const change = (e)=>{
    const {name,value} = e.target
    setDetails({...details,[name]:value})
  }
  const sub =(e)=>{
    e.preventDefault()
    console.log("state",details);
    axios.post(`http://localhost:2000/register/check-login`,details).then((response)=>{
      console.log("response----",response);
      const data=response.details
      console.log("data---",data);
      if(response.data.success == true){
        localStorage.setItem("user_id",response.data.data._id)
        navigate('/profile')
      }

    }).catch((error)=>{
      console.log(error);
    })
  }
  


  return (
    <>
      <center>
        <h1>Login</h1>
        <div class="box2">
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name='email' onChange={change} aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={change}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={sub}>Submit</button>
  </form>
        </div>
      </center>
    </>
  )
}

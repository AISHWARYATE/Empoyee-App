import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
export default function Update() {
    const {id}= useParams()
    const [user,setuser] = useState([])
    console.log(id);
        useEffect(()=>{
            axios.get(`http://localhost:2000/register/view-singleuser/${id}`).then((response)=>{
              setuser(response.data.data)
            }).catch((error)=>{
              console.log(error);
            })
    },[])
    console.log(user);


    const change = (e)=>{
      const {name,value} = e.target
      setuser({...user,[name]:value})
    }

    const sub = (e)=>{
    axios.post(`http://localhost:2000/register/update/${id}`,user).then((response)=>{
    const data=response.setuser
    console.log("response>>>",response);
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
   <input type="text" class="form-control" id="exampleFormControlInput1" name='name' onChange={change} value={user.name || ""} />
   </div>
   <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label">email</label>
   <input type="email" class="form-control" id="exampleFormControlInput1" name='email' onChange={change}  value={user.email || ""}/>
   </div>
   <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label"  >phone number</label>
   <input type="text" class="form-control" id="exampleFormControlInput1" name='phonenumber' onChange={change}  value={user.phonenumber || ""} />
   </div>
   <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label"  >Qualification</label>
   <input type="text" class="form-control" id="exampleFormControlInput1" name='qualification' onChange={change}  value={user.qualification || ""} />
   </div>
   <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label" >Experience</label>
   <input type="text" class="form-control" id="exampleFormControlInput1" name='experience' onChange={change}  value={user.experience || ""} />
   </div> 
   <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label">upload photo</label>
   <input type="file" class="form-control" id="exampleFormControlInput1" />
   </div>
   <div class="mb-3">
   <label for="exampleFormControlTextarea1" class="form-label">Address</label>
   <textarea class="form-control"
   id="exampleFormControlTextarea1" rows="2" name='address' onChange={change}  value={user.address || ""}></textarea>
   </div>
   <button type="button" class="btn btn-primary btn-lg" onClick={sub} >Submit</button>
   </div>
      </form>
      </center>
    </>
  )
}

import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'

export default function Viewemployee() { 
  const [user,setuser] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:2000/register/view-user`).then((response)=>{
      const data=response.data.details
      console.log("data---",data);
      console.log(response.data.details);
      setuser(response.data.details)
    }).catch((error)=>{
      console.log(error);
    })
  },[])
  console.log(user);

  const deleteuser=(id)=>{
    axios.get(`http://localhost:2000/register/delete/${id}`).then((response)=>{
         window.location.reload()
         })
  }
   


  return (
    <>
    <Navbar/>
    {user.map((data)=>(
          <div class="row " style={{display:"inline-flex"}}>
          <div class="col">
            <div class="card ">
              <img src={`upload/${data.image}`} style={{height:"200px"}} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{data.name}</h5>
                <p class="card-text">{data.email}</p>
                <p class="card-text">{data.phonenumber}</p>
                <p class="card-text">{data.qualification}</p>
                <p class="card-text">{data.experience}</p>
                <p class="card-text">{data.address}</p>
                <a type="button" href={`./updateemployee/${data._id}`} class="btn btn-success">Edit</a>
              </div>
              <button type="button" onClick={()=>{deleteuser(data._id)}} class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>     
    )
    )}
     </>
  )
  }


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar';

export default function Profile() {
  
  const user_id = localStorage.getItem('user_id')
  console.log(user_id);
  const [user,setuser]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:2000/register/view-singleuser/${user_id}`).then((response)=>{
      setuser(response.data.data)
    }).catch((error)=>{
      console.log(error);
    })
    },[])  
console.log(user);
  
  return (
    <>
       <Navbar/>
          <div class="row" style={{display:"inline-flex"}}>
          <div class="col">
            <div class="card">
              <img src={`upload/${user.image}`} style={{height:"200px"}} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{user.name}</h5>
                <p class="card-text">{user.email}</p>
                <p class="card-text">{user.phonenumber}</p>
                <p class="card-text">{user.qualificatiom}</p>
                <p class="card-text">{user.experience}</p>
                <p class="card-text">{user.address}</p>
              </div>
            </div>
          </div>
         </div>
    </>
  )
}

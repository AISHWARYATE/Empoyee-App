import React from 'react'
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const  navigate = useNavigate()
  const logout = () =>
  {
    localStorage.removeItem('user_id')
    navigate('/login')
  } 
  return (
    <>
     <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link "  href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/addemployee">Add Emoloyee</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/viewemployee">View Employee</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={logout}>Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
    </>
  )
}

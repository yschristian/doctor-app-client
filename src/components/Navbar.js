import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  const token = localStorage.getItem("token")
  console.log(token)
  return (
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">

        <h1 class="logo me-auto"><Link to="/"><a >YM.Hos</a></Link></h1>

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><a class="nav-link scrollto active" href="/">Home</a></li>
            {/* <li><a class="nav-link scrollto" href="#about"></a>Aboutus</li> */}
            <li><a class="nav-link scrollto" href="#contact"><Link style={{ textDecoration: "none" }} to="/">Apply Doctor</Link></a></li>
            {
              token ? 
             <>
              <li><a class="nav-link " ><Link style={{textDecoration:"none"}} to="/dashboard">Dasboard</Link></a></li>
              {/* <li><a class="nav-link " ><Link style={{textDecoration:"none"}} to="/register">Register</Link></a></li>  */}
             </>
              :
                <>
                  <li><a class="nav-link " ><Link style={{ textDecoration: "none" }} to="/login">Login</Link></a></li>
                  <li><a class="nav-link " ><Link style={{ textDecoration: "none" }} to="/register">Register</Link></a></li>
                </>
            }
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a href="#appointment" class="appointment-btn scrollto"><span class="d-none d-md-inline">Make an</span> Appointment</a>
      </div>
    </header>
  )
}

export default Navbar
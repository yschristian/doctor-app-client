import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">

        <h1 class="logo me-auto"><Link to="/"><a >YM.Hos</a></Link></h1>

        <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a>

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><a class="nav-link scrollto active" href="/">Home</a></li>
            {/* <li><a class="nav-link scrollto" href="#about"></a>Aboutus</li> */}
            {/* <li><a class="nav-link scrollto" href="#contact">Contact</a></li> */}
            <li><a class="nav-link " href="/login">Login</a></li>
            <li><a class="nav-link " href="/login">Register</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a href="#appointment" class="appointment-btn scrollto"><span class="d-none d-md-inline">Make an</span> Appointment</a>
      </div>
    </header>
  )
}

export default Navbar
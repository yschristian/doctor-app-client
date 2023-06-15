import React, { useState } from 'react'
import "./navbar.css"
import { Link, useNavigate } from "react-router-dom"
import { Badge, message } from "antd";

function Navbar() {
  const token = localStorage.getItem("token")
  const [isMenuToggled, setIsMenuToggled] = useState(true)
  const navigate = useNavigate();
  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/");
  };
  return (
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">

        <h1 class="logo me-auto"><Link to="/"><a >Dream Medical H.</a></Link></h1>

        <nav id="navbar"  className={isMenuToggled ? 'navbar order-last order-lg-0' : "navbar-mobile"}>
          <ul>
            <li><a class="nav-link scrollto active" href="/">Home</a></li>
            {
              token ? 
             <>
              <li style={{textDecoration:"none"}}><a class="nav-link " ><Link style={{textDecoration:"none"}} to="/dashboard">Dasboard</Link></a></li>
              <li style={{textDecoration:"none"}}><a class="nav-link " ><Link onClick={handleLogout} style={{textDecoration:"none"}} >Logout</Link></a></li>
             </>
              :
                <>
                  <li style={{textDecoration:"none"}}><a class="nav-link " ><Link style={{ textDecoration: "none" }} to="/login">Login</Link></a></li>
                  <li style={{textDecoration:"none"}}><a class="nav-link " ><Link style={{ textDecoration: "none" }} to="/register">Register</Link></a></li>
                </>
            }
          </ul>
          <i onClick={() => setIsMenuToggled(!isMenuToggled)} className={isMenuToggled ? 'bi bi-list mobile-nav-toggle ' : 'bi mobile-nav-toggle bi-x text-light'}></i>
        </nav>
        {/* <Link to="/dashboard"><a  class="appointment-btn scrollto"><span class="d-none d-md-inline">Make an</span> Appointment</a></Link> class="bi bi-list mobile-nav-toggle"*/}
      </div>
    </header>
  )
}

export default Navbar
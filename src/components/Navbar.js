import React, { useState } from 'react'
import "./navbar.css"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Badge, message } from "antd";
import { useSelector } from 'react-redux';

function Navbar() {
  const token = localStorage.getItem("token")
  const [isMenuToggled, setIsMenuToggled] = useState(true)
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">

        <h1 class="logo me-auto"><Link to="/"><a >Dream M Center.</a></Link></h1>

        <nav id="navbar" className={isMenuToggled ? 'navbar order-last order-lg-0' : "navbar-mobile"}>
          <ul>
            {
              token ?
                <>
                  {/* <li style={{textDecoration:"none"}}><a class="nav-link " ><Link style={{textDecoration:"none"}} to="/dashboard">Dasboard</Link></a></li> */}
                  <div className="header1">
                    <div className="header-content" style={{ cursor: "pointer" }}>
                      <Badge
                        count={user && user.notifcation.length}
                        onClick={() => {
                          navigate("/notification");
                        }}
                      >
                        <i class="fa-solid fa-bell"></i>
                      </Badge>

                      <Link to="/dashboard">dashboard</Link>
                      <Link to="/dashboard">{user && user?.name}</Link>
                      {/* <Link to="/login" onClick={handleLogout} style={{textDecoration:"none"}} >Logout</Link> */}
                    </div>

                  </div>

                </>
                :
                <>

                  <li>
                    <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
                      About us
                    </Link>
                  </li>
                  {/* <li>
                    <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">
                      Contact us
                    </Link>
                  </li> */}
                  <li>
                    <Link className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`} to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className={`nav-link ${location.pathname === '/register' ? 'active' : ''}`} to="/register">
                      Register
                    </Link>
                  </li>

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
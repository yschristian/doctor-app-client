import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

function Main() {
  const token = localStorage.getItem("token")
  return (
    <div id="hero" class="d-flex align-items-center">
      <div class="container">
        <h1>Welcome to Dream Medical Center.</h1>
        <h2>We are here to help you, to make appointment with <br></br> doctors of different Clinics and Hospitals</h2>
       {token ? "" : <Link to="/login"><a class="btn-get-started scrollto">Make An Appointments</a></Link>}
      </div>
    </div>
  )
}

export default Main
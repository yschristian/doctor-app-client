import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div id="hero" class="d-flex align-items-center">
      <div class="container">
        <h1>Welcome to YM.Hospital</h1>
        <h2>We are here to help you, to make appointment with <br></br> doctors of different Clinics and Hospitals</h2>
        <Link to="/login"><a class="btn-get-started scrollto">Get Started</a></Link>
      </div>
    </div>
  )
}

export default Main
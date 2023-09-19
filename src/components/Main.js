import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

function Main() {
  const token = localStorage.getItem("token")
  return (
    <div id="hero" class="d-flex align-items-center">
      <div class="container">
        <h1>Welcome to Dream Medical Center.</h1>
        <h2>
          We are here to help you, to make appointment with <br></br> different
          doctors in our hospital.
        </h2>
        {token ? (
          ""
        ) : (
          <Link to="/login">
            <a class="btn-get-started scrollto">Make An Appointments</a>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Main

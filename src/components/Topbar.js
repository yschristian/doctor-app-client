import React from 'react'
import "./navbar.css"

const Topbar = () => {
  return (
    <div id="topbar" class="d-flex align-items-center fixed-top">
    <div class="container d-flex justify-content-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope"></i> <a href="mailto:medicaldreamcenter@gmail.com">medicaldreamcenter@gmail.com</a>
        <i class="bi bi-phone"></i><a href="tel:+250788875589">+250788875589</a>
    </div>
      <div class="d-none d-lg-flex social-links align-items-center">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
    </div>
  )
}

export default Topbar
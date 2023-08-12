import React from 'react'
import aboutImage from "../img/about.jpg"
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <section id="about" class="about">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-5 col-lg-6 d-flex justify-content-center align-items-stretch position-relative">
              <img src={aboutImage} class="glightbox word-top" width="100%" height="100%" />
            </div>

            <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5 word-top" >
              <h3>For he who is in the pursuit of pleasures should avoid something</h3>
              <p> To be a pleasure or an exercise. We are here to reject the accusation. Not the very least, but the times of praise. They are freed from pleasure, but they will suffer bodily pains. They are free to be laborious and there is no obligation to do so. He accepts either with pleasure.</p>
              <div class="icon-box">
                <div class="icon"><i class="fa-sharp fa-regular fa-hospital"></i></div>
                <h4 class="title"><a href="">Hospital</a></h4>
                <p class="description">To be a pleasure or an exercise. We are here to reject the accusation. Not the very least, but the times of praise. They are freed from pleasure, but they will suffer bodily pains. They are free to be laborious and there is no obligation to do so. He accepts either with pleasure.</p>
              </div>

              <div class="icon-box">
                <div class="icon"><i class="fa-solid fa-syringe"></i></div>
                <h4 class="title"><a href="">Vaccination </a></h4>
                <p class="description">It is often associated with vaccination or immunization programs and We have administration of vaccines to prevent or protect against specific diseases.</p>
              </div>

              <div class="icon-box">
                <div class="icon"><i class="fa-solid fa-pills"></i></div>
                <h4 class="title"><a href="">Pills</a></h4>
                <p class="description">To be a pleasure or an exercise. We are here to reject the accusation. Not the very least, but the times of praise. They are freed from pleasure, but they will suffer bodily pains. They are free to be laborious and there is no obligation to do so. He accepts either with pleasure.</p>
              </div>
              <div class="icon-box">
                <div class="icon"><i class="fa-regular fa-plus"></i></div>
                <h4 class="title"><a href="">Medical Consultations</a></h4>
                <p class="description">To be a pleasure or an exercise. We are here to reject the accusation. Not the very least, but the times of praise. They are freed from pleasure, but they will suffer bodily pains. They are free to be laborious and there is no obligation to do so. He accepts either with pleasure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import About from '../components/About'
import Main from '../components/Main'
import Topbar from '../components/Topbar'

const Home = () => {
  return (
    <>
      <Topbar />
      <Navbar/>
      <Main />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
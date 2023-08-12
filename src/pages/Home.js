import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Topbar from '../components/Topbar'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className=''>
      <Topbar />
      <Navbar/>
      <Main />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
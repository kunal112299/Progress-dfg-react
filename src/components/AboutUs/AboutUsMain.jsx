import React from 'react'
import Navbar from '../Navbar'
import Aboutus from './Aboutus'
import AboutUsDesc from './AboutUsDesc'
import Footer from '../Footer'

function AboutUsMain() {
  return (
    <div>
      <Navbar />
      <AboutUsDesc/>
      <Aboutus/>
      <Footer />
    </div>
  )
}

export default AboutUsMain

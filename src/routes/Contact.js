import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import HeroImage from '../component/HeroImage'
import Form from '../component/Form'

const Contact = () => {
  return (
    <div>
       <Navbar /> 
       <HeroImage heading="CONTACT." text="Contact GLX Travel." /> 
       <Form />

       <Footer />
    </div>
  )
}

export default Contact
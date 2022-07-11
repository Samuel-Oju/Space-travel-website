import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import HeroImage from '../component/HeroImage'
import TrainingCard from '../component/TrainingCard'

const Training = () => {
  return (
    <div>
    <Navbar />
    <HeroImage heading="TRAINING"  text="Pre-Flight & In-Flight Training" />
    <TrainingCard />

    <Footer />
    </div>
  )
}

export default Training
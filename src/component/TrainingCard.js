import React from 'react'
import "./TrainingStyles.css"
import { Link } from 'react-router-dom'
import Pod from "../assets/pod.jpg"
import Moon from "../assets/moon.jpg"

const TrainingCard = () => {
  return (
    <div className='training'>
    <div className='left'>
    <h1>Training</h1>
    <p>Thorough training is all we do </p>


    <Link to="./contact" className='btn'>Contact</Link>
    </div>
    <div className='right'>
    <div className='img-container'>
    <div className='image-stack top'>
    <img src={Moon} className="img" alt='' />

    </div>

    <div className='image-stack bottom'>
    <img src={Pod} className="img" alt='' />
    </div>
    </div>

    </div>
    
    </div>
  )
}

export default TrainingCard
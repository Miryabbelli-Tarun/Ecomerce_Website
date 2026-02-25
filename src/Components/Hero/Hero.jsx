import React from 'react'
import './Hero.css'
import boys from '../../assets/boys.png'
import women from '../../assets/women.png'
const Hero = () => {
  return (
    <div className="hero">
        
        <div className="left">
            <p>Shop Men</p>
            <img src={boys} alt="" />
        </div>
        <div className="right">
            <img src={women} alt="" />
            <p>Shop Women</p>
        </div>
    </div>
  )
}

export default Hero
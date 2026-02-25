import React from 'react'
import './Hero.css'
import boys from '../../assets/boys.png'
import women from '../../assets/women.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className="hero">
        
          <Link to='/products/men' className="left">
            <p>Shop Men</p>
            <img src={boys} alt="" /></Link>
            <Link to='/products/women' className="right"><p>Shop Women</p>
            <img src={women} alt="" />
            </Link>
    </div>
  )
}

export default Hero
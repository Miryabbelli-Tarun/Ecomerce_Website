import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import ProductList from '../../Components/ProductsList/ProductList'

const Home = () => {
  return (
    <div className='home'>      
        <Hero />
        <ProductList />
    </div>
  )
}

export default Home;
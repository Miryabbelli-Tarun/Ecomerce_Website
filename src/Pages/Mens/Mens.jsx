import React, { useState } from 'react'
import './Mens.css'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Mens = () => {
    let [products,setProducts]=useState([])
    let fetchProducts=async ()=>{
        try{const products_url=`https://dummyjson.com/products/category/mens-shirts`
        let response=await fetch(products_url);
        let data=await response.json()
        setProducts(data.products)}
        catch(error){
            console.log('error')
        }
      }
      useEffect(()=>{
        fetchProducts();
      },[])
  return (
    <>
    <div className='mens'>
        <h1>Mens</h1>
        
        <div className='product-list mens-product-list'>
                {
                    products.map((product,index)=>{
                    return <Link to={`/products/${product.id}` } className="product-link"><ProductCard key={index} product={product}/></Link>
                    })
                }
        </div>

    </div>
    </>
  )
}

export default Mens;
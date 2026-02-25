import React, { useEffect, useState } from 'react'
import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'

const ProductList = () => {
  let [products,setproducts]=useState([])
  let fetchProducts=async ()=>{
    const products_url=`https://dummyjson.com/products?limit=60`
    let response=await fetch(products_url);
    let data=await response.json()
    setproducts(data.products)
  }
  useEffect(()=>{
    fetchProducts();
  },[])
  return (
    <div className='product-list'>
      {
         products.map((product,index)=>{
          return <Link to={`/products/${product.id}` } className="product-link"><ProductCard key={index} product={product}/></Link>
         })
      }
    </div>
  )
}

export default ProductList;
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import './Product.css'


const Product = () => {
  let {productId}=useParams()
  let [productDetails,setProductDetails]=useState()
  const fetchProduct=async ()=>{
    let product_url=`https://dummyjson.com/products/${productId}`
    let response=await fetch(product_url);
    let data=await response.json();
    setProductDetails(data)
  }
  useEffect(()=>{
    fetchProduct()
  },[productId])
  if (!productDetails) {
    return <div className="loading">Loading Product...</div>;
  }
  return (
    <div className='product-page'>
      <div className="left">
            <img src={productDetails?productDetails.images[0]:''} alt="" />
            <div className='description'>
            <h4>Description</h4>
            <p>{productDetails.description}</p>
            </div>
      </div>
      <div className="right">
          <p className='title'>{productDetails.title}</p>
          <p className='cost'>${productDetails.price}</p>
          <label htmlFor="size">Size</label>
          <select name="size" id="">
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </select>
          <p>Quantity</p>
          <input type="number" defaultValue={1} min={1}/>
          <div className="addbuttons">
            <button>Add to Cart</button>
            <CiHeart className='like'  />
          </div>
          <button className='buy' >Buy now</button>
      </div>

    </div>
  )
}

export default Product;
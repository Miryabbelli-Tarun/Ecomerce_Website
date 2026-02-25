import React from 'react'
import './ProductCard.css'
import boys from '../../assets/boys.png'


const ProductCard = ({key,product}) => {
  return (
    <div className='product' key={key}>
        <img src={product.images[0]} alt="" />
        <h4>{product.title}</h4>
        <p><span className='actual-price'>${Math.round(product.price*1.4,0)}</span>${product.price}</p>
    </div>
  )
}

export default ProductCard
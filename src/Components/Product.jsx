import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, getTotal } from '../Features/cartSlice';

const Product = ({product}) => {
  const dispatch = useDispatch();
  const addItemToCart = ()=>{
    dispatch(addToCart({id:product.id,title:product.title,content:product.content,price:product.price,url:product.url}))
    dispatch(getTotal());
  }
  return (
    <div className='product-item'>
        <h2>{product.title}</h2>
        <img src={product.url} alt="product description" />
        <div className='card-text m-2'>
            <p>{product.content}</p>
            <span>{product.price}</span>
        </div>
        <button className='btn btn-outline-primary' onClick={addItemToCart}>Add to cart</button>
    </div>
  )
}

export default Product
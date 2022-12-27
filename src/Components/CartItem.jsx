import React from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { decrementQuantity, incrementQuantity, removeItem } from "../Features/cartSlice";

const CartItem = ({ item }) => {
  const totalPrice = (item.price * item.quantity).toFixed(2);
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeItem(item));
  };
  const handleIncrement = ()=>{
    dispatch(incrementQuantity(item))
  }
  const handleDecrement = ()=>{
    dispatch(decrementQuantity(item))
  }
  return (
    <div className="cart-item">
      <div className="product-image">
        <img src={item.url} alt=''/>
        <p>{item.content}</p>
        <p>{item.title}</p>
        <button className="btn btn-outline-danger mb-2" onClick={handleRemove}>
          Remove
        </button>
        <ToastContainer />
      </div>
      <div className="price">{item.price}$</div>
      <div className="quantity">
        <button className="btn btn-outline-warning " onClick={handleIncrement}>+</button>
        <span>{item.quantity}</span>
        <button className="btn btn-outline-warning" onClick={handleDecrement}>-</button>
      </div>
      <div className="total">{totalPrice}$</div>
    </div>
  );
};

export default CartItem;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiRewind } from "react-icons/bi";
import {
  clearCart,
  getTotal,
  getTotalAmount,
  selectAllCart,
} from "../Features/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector(selectAllCart);
  const totalAmount = useSelector(getTotalAmount);
  const totalAmountFixed = totalAmount.toFixed(2);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);
  return (
    <div className="cart-container">
      <h2 className="shoping-title">Shoping Cart</h2>
      {cart.length !== 0 ? (
        <div className="cart-header">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
      ) : (
        <div>
          <h2>Your cart is empty</h2>{" "}
          <Link className="goBack" to="/">
            <BiRewind size="25px" />
            Go shoping
          </Link>
        </div>
      )}

      {cart?.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <hr />
      {cart.length !== 0 ? (
        <div className=" container-fluid bg-dark text-white shoping-info">
          <button className="btn btn-outline-warning" onClick={handleClearCart}>
            Clear Cart
          </button>
          <div className="sub-total">
            <p>
              subtotal <span className="goBack">{totalAmountFixed}$</span>{" "}
            </p>
            <Link className="goBack" to="/">
              <BiRewind size="25px" />
              continue Shoping
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;

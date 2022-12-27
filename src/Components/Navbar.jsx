import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, getTotalQuantity } from "../Features/cartSlice";
import { logOut, selectUser } from "../Features/userSlice";
import Header from "./Header";
const Navbar = () => {
  const totalQuantity = useSelector(getTotalQuantity);
  const dispatch = useDispatch();
  const logOutUser = () => {
    dispatch(logOut());
    dispatch(clearCart());
  };
  const user = useSelector(selectUser);
  return (
    <div className="navbar-navigation p-3 bg-dark">
      <Link to="/">
        <h1 className="logo">OnlineShoping</h1>
      </Link>
      <Link to="/cart">
        <button className="btn btn-outline-warning">
          <FaShoppingCart />
          <span className="text-white notification">{totalQuantity}</span>
        </button>
      </Link>
      {user ? (
        <Header />
      ) : (
        <Link to="/login">
          <button className="btn btn-outline-warning">login</button>
        </Link>
      )}
      {user ? (
        <button className="btn btn-outline-warning" onClick={logOutUser}>
          Logout
        </button>
      ) : (
        <Link to="register">
          <button className="btn btn-outline-warning">Register</button>
        </Link>
      )}
    </div>
  );
};
export default Navbar;

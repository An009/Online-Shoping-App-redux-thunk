import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import {
  fetchProducts,
  getError,
  getIsLoading,
  selectAllProducts,
} from "../Features/productSlice";
import { selectUser } from "../Features/userSlice";
import Product from "./Product";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const user = useSelector(selectUser);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}
      {user ? <>
        <h1 className="title">products list</h1>
        <div className="products">
          {products &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </>:<h2>Please Login to navigate throughout products</h2>}
      
    </>
  );
};

export default Home;

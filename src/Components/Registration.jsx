import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIsLoading, registerUser } from "../Features/userSlice";

const Registration = () => {
    const navigate = useNavigate();
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
  
    const submitForm = (data) => {
      if(data){
        dispatch(registerUser(data));
        navigate('/');
      }
      
    };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
    <div className="container w-50 mt-3 bg-dark text-white p-3 mt-5 rounded">
        <div className="form-group">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-control bg-transparent text-white"
          {...register("name")}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="username" className="form-label">
          username
        </label>
        <input
          type="text"
          className="form-control bg-transparent text-white"
          {...register("username")}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control bg-transparent text-white"
          {...register("email")}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control bg-transparent text-white"
          {...register("password")}
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-outline-warning mt-3"
        disabled={isLoading ? true : false}
      >
        Register
      </button>
    </div>
    </form>
  );
};

export default Registration;

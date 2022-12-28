import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getError, getIsLoading, login, selectUser } from "../Features/userSlice";

const LoginScreen = () => {
  const navigate = useNavigate();
  const user  = useSelector(selectUser);
  const isLoading = useSelector(getIsLoading);
  const errMessage = useSelector(getError);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();


  const submitForm = (data) => {
    if(data){
      dispatch(login(data));
    }
    
  };
  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[navigate,user]);

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="container w-50 mt-3 bg-dark text-white p-3 mt-5 rounded">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Username</label>
          <input
            type="text"
            className="form-control bg-transparent text-white"
            {...register("username")}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control bg-transparent text-white"
            {...register("password")}
            required
          />
        </div>
        <button type="submit" className="btn btn-outline-primary mt-3" disabled={isLoading?true:false}>
          Login
        </button>
        {errMessage ? <p className="text-danger">{errMessage}</p>:null }
      </div>
    </form>
  );
};
export default LoginScreen;

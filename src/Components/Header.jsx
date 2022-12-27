import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../Features/userSlice';

const Header = () => {
  const navigate = useNavigate();
    const userInfo = useSelector(selectUser);
    console.log(userInfo);
    
    useEffect(()=>{
      if(userInfo.length===0){
        navigate('/register');
      }
    },[navigate,userInfo]);
    
  return (
   <span className='rounded bg-warning p-2'>{userInfo.length !==0 ? `Welcome ${userInfo[0]?.username}` : <p>you are not authorized</p>}</span>
  )
};
export default Header;
// import React from 'react'
// import {useState,useEffect} from 'react'
// import {FaUser} from 'react-icons/fa'
// import {useSelector,useDispatch} from 'react-redux' 
// import {login,reset} from '../features/auth/authSlice'
// import {toast} from 'react-toastify'
// import Spinner from '../components/Spinner'
// import { useNavigate } from 'react-router-dom'


// function Login() {

//     const [formData , setformData]=useState({name:'',email:''})
//     const {email,password}=formData

//      const dispatch = useDispatch();
//      const navigate=useNavigate();

//      const {user,isLoading,isSucess,message,isError}=useSelector((state)=>state.auth)
//      useEffect(()=>{
//         if(isError){
//          toast.error(message)
//         }

//         if(isSucess || user){
//             navigate('/')
//         }

//         dispatch(login(userData))
//   },[isError,isSucess,user,message,navigate,dispatch])

//     const onChange=(e)=>{
//         setformData((prevState)=>({
//             ...prevState,
//             [e.target.name]:e.target.value,
//         }))
//     }
//     const onSubmit = (e)=>{
//         e.preventDefault()
    
//         const userData={
//             email,
//             password
//         }
//         dispatch(login(userData))
//     }

//     if(isLoading){
//         return <Spinner/>
//     }
   
// return (
//     <>
//     <section className='heading'>
//     <h1>
//         <FaUser/>Login

//     </h1>
// <p>
//     Please Login for the Support
// </p>
//     </section>
//     <section className="form">
//         <form onSubmit={onSubmit}>
            
//             <div className="form-group">
//             <input type='email' className='form-control' id='email' name='email' value={email} onChange={onChange} placeholder='Enter Your Email'required/>
//             </div>
//             <div className="form-group">
//             <input type='password' className='form-control' id='password' name='password' value={password} onChange={onChange} placeholder='Enter Your Password' required/>
//             </div>
          
//             <div className='form-group'>
//                 <button className="btn btn-block">
//                     Submit
//                 </button>
//             </div>
//         </form>
        
    
//     </section>
//    </>
// )
// }

// export default Login

// 
import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isSuccess, message, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Login
        </h1>
        <p>Please Login for the Support</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter Your Password"
              required
            />
          </div>

          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;

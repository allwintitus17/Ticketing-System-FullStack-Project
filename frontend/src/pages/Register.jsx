    import React from 'react'
    import {useState,useEffect} from 'react'
    import {useNavigate} from 'react-router-dom'
    import {toast} from 'react-toastify'
    import {FaUser} from 'react-icons/fa'
    import {useSelector,useDispatch} from 'react-redux'
    import {register,reset} from '../features/auth/authSlice'
    import Spinner from '../components/Spinner'

    function Register() {

        const [formData , setformData]=useState({name:'',email:'',password:'',password2:''})
        const {name,email,password,password2}=formData
         const dispatch = useDispatch();
         const navigate=useNavigate();
         const {user,isLoading,isError,isSucess,message}=useSelector(state=>state.auth)
        
         //Redirect when Logged in 
         
        const onChange=(e)=>{
            setformData((prevState)=>({
                ...prevState,
                [e.target.name]:e.target.value,
            }))
        }
        useEffect(()=>{
            if(isError){
             toast.error(message)
            }

            if(isSucess || user){
                navigate('/')
            }

            dispatch(reset())
      },[isError,isSucess,user,message,navigate,dispatch])

        const onSubmit = (e)=>{
            e.preventDefault()
            // const {name,email,password,password2}=formData;
            console.log(formData)
             if(password !==password2){
                console.log('password do not match')
                toast.error('Passwords Do Not Match')
            }else{
                toast.success("password got matched")
                const userData={
                    name,
                    email,
                    password
                }

                dispatch(register(userData))
            }
        }

        if(isLoading){
            return <Spinner/>   
        }
       
    return (
        <>
        <section className='heading'>
        <h1>
            <FaUser/>Register 

        </h1>
    <p>
        Please Create an account
    </p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <input type='text' className='form-control' id='name' name='name' value={name} onChange={onChange} placeholder='Enter Your Name' required/>
                </div>

                <div className="form-group">
                <input type='email' className='form-control' id='email' name='email' value={email} onChange={onChange} placeholder='Enter Your Email'required/>
                </div>
                <div className="form-group">
                <input type='password' className='form-control' id='password' name='password' value={password} onChange={onChange} placeholder='Enter Your Password' required/>
                </div>
                <div className="form-group">
                <input type='password' className='form-control' id='password2' name='password2' value={password2} onChange={onChange} placeholder='Re Enter the Passsword' required/>
                </div>
                <div className='form-group'>
                    <button className="btn btn-block">
                        Submit
                    </button>
                </div>
            </form>
            
        
        </section>
       </>
    )
    }

    export default Register

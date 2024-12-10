import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { login } from '../services/operations/authAPI';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const {email,password} = formData;

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email,password, navigate));
    }


  return (
    <div className='h-[90%] flex justify-center items-center'> 

        <div className='flex flex-col gap-3'>
            <Link to="/">
                <button className='bg-white text-xl font-semibold py-1 px-2 rounded-md'>
                    Home Page
                </button>
            </Link>
            
            <h1 className='text-3xl font-semibold text-black'>
                Login User
            </h1>

            <form 
                onSubmit={handleOnSubmit}
                className='flex flex-col gap-3'
            >
                <label>
                    <p className='text-lg text-[#003049]'>Email Address</p>
                    <input 
                        required
                        type='text'
                        name='email'
                        value={email}
                        onChange={handleOnChange}
                        placeholder='Enter email address'
                        className='rounded-md p-2 text-black'
                    />
                </label>
                <label className='relative'>
                    <p className='text-lg text-[#003049]'>Password</p>
                    <input 
                        required
                        type={showPassword ? "text" : "password"}
                        name='password'
                        value={password}
                        onChange={handleOnChange}
                        placeholder='Enter password'
                        className='rounded-md p-2 text-black'
                    />
                    <span
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                        >
                        {showPassword ? (
                            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                        ) : (
                            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                        )}
                    </span>
                </label>
                <button
                    type='submit'
                    className='bg-[#0096c7] p-2 rounded-md text-white'
                >
                    Login
                </button>
            </form>
        </div>

    </div>
  )
}

export default Login
import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {

    
  return (
    <div className='h-[90%] overflow-hidden flex justify-center items-center'>

        <div className=' flex justify-center items-center gap-3'>
            <Link to="/login">
                <button className='bg-white text-xl font-semibold py-1 px-2 rounded-md'>
                    Login
                </button>
            </Link>

            <Link to="/register">
                <button className='bg-white text-xl font-semibold py-1 px-2 rounded-md'>
                    Register
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Home
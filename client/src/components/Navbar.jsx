import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='h-[50px] flex justify-between items-center px-10 bg-[#023e8a]'>
        <div className='text-2xl text-white font-semibold'>
            The Weather Report
        </div>
        <div>
            <input 
                type='text'
                placeholder='Enter Location'
                className='bg-[#adb5bd] rounded-2xl text-black p-2 backdrop-blur-md placeholder:text-black '
            />
        </div>
        
    </div>
  )
}

export default Navbar
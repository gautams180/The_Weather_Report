import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { CiSearch } from "react-icons/ci";

import { MdWaterDrop } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { LuChevronsDownUp } from "react-icons/lu";
import { FaWind } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { BsDropletHalf } from "react-icons/bs";
import { setWeatherReport, showAllWeatherReports } from '../services/operations/weatherAPI';
import { Link } from 'react-router-dom';


const access_key = process.env.REACT_APP_Access_Key

const Dashboard = () => {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const {user} = useSelector((state) => state.auth)
    // console.log(user);

    const {firstName, lastname} = user;

    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        setCity(e.target.value);
    }

    const searchWeather = async() => {
        console.log(access_key);
        const result = await axios.get(`https://api.weatherstack.com/current?access_key=${access_key}&query=${city}`)
        console.log("Weather", result);
        dispatch(setWeatherReport(firstName, lastname, result.data.location, result.data.current));
        dispatch(showAllWeatherReports());
        setWeather(result?.data);
        

    }

    

  return (
    <div className='h-[90%] flex flex-col gap-5 justify-center items-center'>
        <div>
            <label className='flex gap-3'>
                <input 
                    type='text'
                    name='city'
                    value={city}
                    onChange={handleOnChange}
                    placeholder='Enter Location'
                    className='bg-white rounded-2xl text-black p-2 backdrop-blur-md placeholder:text-black '
                />
                <button
                    onClick={searchWeather}
                 className='px-3 bg-white rounded-full'>
                    <CiSearch />
                </button>
            </label>
        </div>

        <div className='bg-white p-5 rounded-xl min-w-[700px] flex flex-col gap-3'>
            <div className='text-xl font-semibold '>
                {`Weather today in ${weather?.location?.name}, ${weather?.location?.country} searched by ${firstName}`}
            </div>

            <div>
                <div>Feels Like</div>
                <div className='text-5xl font-semibold'>{weather?.current?.feelslike}{`\u00b0`}C</div>
            </div>

            <div className='w-full flex'>

                <div className='w-[50%] p-2 flex flex-col'>
                    <div className='flex justify-between p-2 border-t-[1px] border-black'>
                        <p className='flex gap-1 items-center'><MdWaterDrop/> Humidity</p>
                        <p>{weather?.current?.humidity}%</p>
                    </div>
                    <div className='flex justify-between p-2 border-t-[1px] border-black'>
                        <p className='flex gap-1 items-center'><LuChevronsDownUp/> Pressure</p>
                        <p>{weather?.current?.pressure}mb</p>
                    </div>
                    <div className='flex justify-between p-2 border-t-[1px] border-black'>
                        <p className='flex gap-1 items-center'><FaWind/> Wind Speed</p>
                        <p>{weather?.current?.wind_speed}Km/hr</p>
                    </div>
                    
                </div>

                <div className='w-[50%] p-2 flex flex-col'>
                    <div className='flex justify-between p-2 border-t-[1px] border-black'>
                        <p className='flex gap-1 items-center'><FaCloud/> Cloud Cover</p>
                        <p>{weather?.current?.cloudcover}</p>
                    </div>
                    <div className='flex justify-between p-2 border-t-[1px] border-black'>
                        <p className='flex gap-1 items-center'><BsDropletHalf/> Precipitation{`\u00b0`}</p>
                        <p>{weather?.current?.precip}</p>
                    </div>
                    <div className='flex justify-between p-2 border-t-[1px] border-black'>
                        <p className='flex gap-1 items-center'><FaEye/> Visibility</p>
                        <p>{weather?.current?.visibility}Km</p>
                    </div>
                </div>
            </div>
        </div>

        <Link to="/allReports">
            <button className='bg-[#0096c7] p-2 rounded-md text-white'>
                Show All Weather Reports
            </button>
        </Link>
    </div>
  )
}

export default Dashboard
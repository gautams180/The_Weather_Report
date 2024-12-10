import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showAllWeatherReports } from '../services/operations/weatherAPI';

const AllReports = () => {

    const dispatch = useDispatch();
    const {allReports} = useSelector((state) => state.weather);
    console.log("allReports ",allReports);

    useEffect(() => {
        dispatch(showAllWeatherReports());
    })

  return (
    <div className='h-[90%] flex justify-center items-center'>
        <div className='w-[600px] bg-white rounded-xl text-black p-5 flex flex-col gap-2'>
            {
                allReports.map((report,index) => (
                    <div className='py-2 flex justify-between' key={index}>
                        
                        <div>
                            {`${report.firstName}`}
                        </div>

                        <div>
                            {`${report?.location?.name} ${report?.location?.region} ${report?.location?.country}`}
                        </div>

                        <div>
                            {report.current.weather_descriptions?.[0]}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AllReports
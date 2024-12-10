
import { WeatherModel } from "../config/database.js";

export const setWeatherReport = async(req,res) => {
    try {
        const {
            firstName,
            lastName,
            location,
            current
        } = req.body;

        if( !firstName || !location || !current ) {
            return res.status(500).json({
                success: false,
                message: "Details missing: " + error.message,
            })
        }

        const NewWeatherReport = await WeatherModel.create({
            firstName: firstName,
            lastName: lastName,
            location: location,
            current: current
        });

        console.log("New weather report", NewWeatherReport);

        return res.status(200).json({
            success: true,
            message: "Weather Report Registered Successfully",
            data: NewWeatherReport,
        })
    }
    catch(error) {
        console.error(error.message);
        return res.status(500).json({
            success:false,
            message: "Error while registering weather"
        })
    }
}

export const showAllWeatherReports = async (req,res) => {
    try {
        const allWeatherReports = await WeatherModel.findAll();
        console.log("All weather reports", allWeatherReports);

        if(allWeatherReports.length == 0) {
            return res.status(500).json({
                success: false,
                message: "No weather reports found",
            })
        }

        return res.status(200).json({
            success: true,
            data: allWeatherReports,
        })
    }
    catch(error) {
        console.error(error.message);
        return res.status(500).json({
            success:false,
            message: "Error while fetching all weather reports"
        })
    }
}
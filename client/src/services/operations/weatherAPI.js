import { setLoading } from "../../redux/slices/authSlice";
import { setAllReports } from "../../redux/slices/weatherSlice";
import { apiConnector } from "../apiConnector"
import toast from "react-hot-toast";


export const setWeatherReport = (firstName, lastName, location, current) => {
    return async(dispatch) => {
      const toastId = toast.loading("Loading...");
      setLoading(true);

      try {
          const response = await apiConnector(
            "POST",
            "http://localhost:4000/weather/setWeatherReport",
            {
              firstName,
              lastName,
              location,
              current
            }
          )

          if(!response.data.success) {
            throw new Error(response.data.message);
          }

          console.log("Set Weather Report API Response.......",response);

          toast.success("Weather Report Set Successfully");
      }
      catch(error) {
        console.log("Set Weather Report API Error.........", error);
        toast.error(error.response.data.message);
      }

      toast.dismiss(toastId);
      setLoading(false);
    }
}

export const showAllWeatherReports = () => {
  return async(dispatch) => {
    const toastId = toast.loading("Loading...");
    let result = []

    try {
        const response = await apiConnector( "GET", "http://localhost:4000/weather/showAllWeatherReports",)

        if(!response.data.success) {
          throw new Error(response.data.message);
        }

        console.log("Show Weather Report API Response.......",response);

        // dispatch(setAllReports(response.data.data));
        // localStorage.setItem("allReports", JSON.stringify(response.data.data));
        result = response?.data?.data

        toast.success("Weather Report Fetched Successfully");

    }
    catch(error) {
      console.log("Show Weather Report API Error.........", error);
      toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
  }
}

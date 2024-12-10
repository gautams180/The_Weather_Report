import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weather: localStorage.getItem("weather") ? JSON.parse(localStorage.getItem("weather")) : null,
    allReports: localStorage.getItem("allReports") ? JSON.parse(localStorage.getItem("allReports")) : null,
}

const weatherSlice = createSlice({
    name:"weather",
    initialState: initialState,
    reducers: {
        setWeather(state, value) {
            state.weather = value.payload;
        },
        setAllReports(state, value) {
            state.allReports = value.payload;
        }
    },
})

export const {setWeather, setAllReports} = weatherSlice.actions;

export default weatherSlice.reducer;
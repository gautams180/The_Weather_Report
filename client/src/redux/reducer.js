import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice"
import weatherSlice from "./slices/weatherSlice"


const rootReducer = combineReducers({
    auth: authReducer,
    weather: weatherSlice,
})

export default rootReducer;
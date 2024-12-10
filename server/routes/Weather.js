import express from 'express';

const router = express.Router();

import { setWeatherReport, showAllWeatherReports } from '../controllers/Weather.js';

router.post("/setWeatherReport", setWeatherReport);
router.get("/showAllWeatherReports", showAllWeatherReports);



export default router;
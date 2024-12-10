import express from 'express'
import {connection} from './config/database.js';
import weatherRoutes from './routes/Weather.js'
import authRoutes from './routes/Auth.js'
import cors from 'cors'

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})


connection();

app.use(express.json());
app.use(cors({
    origin:"*"
}))


app.use("/weather", weatherRoutes);
app.use("/auth", authRoutes);
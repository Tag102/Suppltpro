import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from "./config/db.js";

//configure env
dotenv.config();

//databse config
connectDB();

//rest objects
const app = express()

//middelwares
app.use(express.json());
app.use(morgan("dev"));

//rest api
app.get("/", (req, res) => {
    res.send("<h2>Welcome to Supplypro app</h2>");
});


// Port 
const PORT = process.env.PORT || 8080;


//run listen
app.listen(PORT, () => {
    console.log(`Server Running on mode ${process.env.DEV_MODE} on port ${PORT}`)
});
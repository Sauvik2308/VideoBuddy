// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";
// import { app } from "./app.js";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
//routes import
import userRouter from './routes/user.routes.js'

const app = express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cookieParser())

//routes declaration
app.use("/api/v1/users", userRouter)
// http://localhost:8000/api/v1/user/register

dotenv.config({
    path: './env'
})

app.get('/', (req, res) => {
    res.send("API Working")
})


connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`App Listening on Port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MongoDB Connection Failed !!!", err);

    })

    //export for vercel
    export default app;












/*
import express from "express"

const app = express()

// Approach 1 : to connect to MongoDB database with all the connection code in one file(not recommended for professional projects) 
;( async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);
        
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error     
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on PORT ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw error;        
    }
})()
*/
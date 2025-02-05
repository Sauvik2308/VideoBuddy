// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
})



connectDB()













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
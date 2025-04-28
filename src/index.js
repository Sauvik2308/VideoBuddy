// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path : './env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`App Listening on Port ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MongoDB Connection Failed !!!", err);
    
})













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
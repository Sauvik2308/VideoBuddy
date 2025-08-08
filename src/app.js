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

app.use(express.json({limit: "16kb"}))
app.use(express.static("public"))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cookieParser())

// Test route
app.get("/", (req, res) => {
    res.send("API Working2");
});


//routes declaration
app.use("/api/v1/users", userRouter)
// http://localhost:8000/api/v1/user/register

export { app }
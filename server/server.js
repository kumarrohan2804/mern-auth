import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";


import connectDB from "./config/mongodb.js";

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true })); // for sending cookie in response
connectDB();


app.get("/", (req, res) => {
    res.send("first page");
})

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
})
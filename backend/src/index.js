import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import env from "dotenv";

const app=express()
env.config()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin:process.env.CORS_ORIGIN_URL
}));
app.listen(3000,()=>{
    console.log("server listening on port 3000")
})

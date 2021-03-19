import express from 'express';
import mongoose from 'mongoose';

//APP CONFIG
const app = express();
const port  = process.env.PORT || 8001;

//MIDDLEWARE

//DB CONFIG

//API ENDPOINTS
app.get("/", (req, res)=> res.status(200).send("ma nigga whats good"));

//APP LISTEN
app.listen(port, ()=> console.log(`listening on port: ${port}`))
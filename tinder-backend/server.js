import express from 'express';
import mongoose from 'mongoose';

import Cards from './Models/dbCards.js'

//APP CONFIG
const app = express();
const port  = process.env.PORT || 8001;
const url = 'mongodb+srv://admin:calyster@cluster0.wl09m.mongodb.net/tinderdb?retryWrites=true&w=majority'

//MIDDLEWARE


//DB CONFIG
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
})

//API ENDPOINTS
app.get("/", (req, res)=> res.status(200).send("ma nigga whats good"));
app.post('/tinder/cards', (req, res)=> {
    const dbCards = req.body;

    Cards.create(dbCards, (err, data)=> {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

//APP LISTEN
app.listen(port, ()=> console.log(`listening on port: ${port}`))
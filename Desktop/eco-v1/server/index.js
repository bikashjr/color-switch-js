const express = require('express'); //framework of nodejs
require('dotenv').config();  //use env variables.
const cors = require('cors'); //client le server ma request cors error naaops vanera.
const mongoose = require('mongoose') //orm database

//env variables
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL).then(() => {
    console.log('Database Connected')
})

const indexRouter = require('./routes');

const app = express(); //initializing express
//middle wares
app.use(cors())
app.use(express.json())

//routing
app.use('/api/v1', indexRouter);

app.use((err, req, res, next) => {
    const errMsg = err ? err.toString() : "Something Went Wrong";
    res.status(500).json({ data: '', msg: errMsg })
})

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`)
})



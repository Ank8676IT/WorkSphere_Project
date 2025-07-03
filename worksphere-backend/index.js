require('./connection');
const express = require('express');
const app = express();
require('dotenv').config({path:"./config.env"});
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cookieParser());    

const UserRoutes = require('./routes/user');


app.use('/api/auth', UserRoutes);

app.listen(PORT, ()=>{
    console.log("Backend Server is running on Port", PORT)
})

require('dotenv').config({ path:"./config.env" });
require('./connection');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const cors = require('cors')

const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cookieParser());    
app.use(cors({
    credentials: true,
    origin:"http://localhost:5173"
}))

const UserRoutes = require('./routes/user');


app.use('/api/auth', UserRoutes);

app.listen(PORT, ()=>{
    console.log("Backend Server is running on Port", PORT)
})
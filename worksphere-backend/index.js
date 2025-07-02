require('./connection');
const express = require('express');
const app = express();



app.get('/',(req,res)=>{
    res.send({
        message:"Congrats on running Backend Server running on PORT 4000"
    })
})

app.listen(4000, ()=>{
    console.log("Backend Server is running on port 4000")
})
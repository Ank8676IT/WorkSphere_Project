const mongoose = require('mongoose');



//o4ZXIa5aXqSou3xj
// mongodb+srv://ankitoraon696867:o4ZXIa5aXqSou3xj@cluster0.0n1tg5g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect('mongodb+srv://ankitoraon696867:o4ZXIa5aXqSou3xj@cluster0.0n1tg5g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(res => {
    console.log("Database successfully connected ");
  })
  .catch(err => {
    console.log(err)
  })
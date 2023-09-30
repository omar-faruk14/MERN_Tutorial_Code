require('dotenv').config();
const express=require('express');
const mongoose = require('mongoose');
const app=express();
const WorkoutRoute= require('./route/workouts');

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

  app.use(express.json());

//Route

app.use('/api/workout',WorkoutRoute);
// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('db & listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 




require('dotenv').config();
const express=require('express');
const app=express();
const WorkoutRoute= require('./route/workouts');

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

//Route

app.use('/api/workout',WorkoutRoute);



app.listen(process.env.PORT,() => {
    console.log('listening port!', process.env.PORT);
});


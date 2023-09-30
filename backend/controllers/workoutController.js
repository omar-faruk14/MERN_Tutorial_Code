
const Workout = require('../models/workoutModel');
//post method
const CreateWorkout=async (req, res) => {
    const {title, load, reps} = req.body
  //add data to db  
    try {
      const workout = await Workout.create({title, load, reps})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

  module.exports={
    CreateWorkout,
  }
const express = require('express')
const Workout = require('../models/workoutModel');
const {
  CreateWorkout,
  getWorkouts,
  getWorkout,
}=require('../controllers/workoutController')
const router = express.Router()

// GET all workouts
router.get('/',getWorkouts )

// GET a single workout
router.get('/:id', getWorkout)
  
  // POST a new workout
  router.post('/', CreateWorkout);
  
  // UPDATE a workout
  router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a test'})
  })

module.exports=router;
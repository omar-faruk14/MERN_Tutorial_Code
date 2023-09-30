const express = require('express')
const Workout = require('../models/workoutModel');
const {
  CreateWorkout,
    getWorkouts,
    getWorkout,
    updateWorkout,
    deleteWorkout
}=require('../controllers/workoutController')
const router = express.Router()

// GET all workouts
router.get('/',getWorkouts )

// GET a single workout
router.get('/:id', getWorkout)
  
  // POST a new workout
  router.post('/', CreateWorkout);
  
// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports=router;
const express = require('express')
const Workout = require('../models/workoutModel');
const {
  CreateWorkout,
}=require('../controllers/workoutController')
const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
  res.json({mssg: 'main route'})
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get with id'})
  })
  
  // POST a new workout
  router.post('/', CreateWorkout);
  
  // UPDATE a workout
  router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a test'})
  })

module.exports=router;
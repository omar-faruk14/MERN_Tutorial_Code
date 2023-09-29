const express = require('express')

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
  router.post('/', (req, res) => {
    res.json({mssg: 'post checking'})
  })
  
  // DELETE a workout
  router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a test'})
  })
  
  // UPDATE a workout
  router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a test'})
  })

module.exports=router;
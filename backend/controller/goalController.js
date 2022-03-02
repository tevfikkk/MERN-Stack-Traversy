const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()

  res.status(200).json(goals)
})

// @desc Set a goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const goal = await Goal.create({
    text: req.body.text,
  })

  res.status(200).json(goal)
})

// @desc Update a goal
// @route PUT /api/goals
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(404)
    throw new Error('Goal not found')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedGoal)
})

// @desc Delete a goal
// @route DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  // since async function is used, await must be applied

  if (!goal) {
    res.status(404)
    throw new Error('Goal not found')
  }

  await goal.remove() // it deletes any id from database
  // there's no reason to store in a variable

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}

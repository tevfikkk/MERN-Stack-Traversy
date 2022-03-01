// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ messeage: 'Get goals' })
}

// @desc Set a goal
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
  res.status(200).json({ messeage: 'Set a goal' })
}

// @desc Update a goal
// @route PUT /api/goals
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ messeage: `Update goal ${req.params.id}` })
}

// @desc Delete a goal
// @route DELETE /api/goals
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` })
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}

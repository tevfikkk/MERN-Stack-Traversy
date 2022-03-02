const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controller/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
// Since a couple of line below (get and post) do the same thing as just above
// we can chain them
// because they're in the same path
// // gets a goal
// router.get('/', getGoals)

// // creates a goal
// router.post('/', setGoal)

router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)
// // updates a goal
// router.put('/:id', updateGoal)

// // deletes a goal
// router.delete('/:id', deleteGoal)

module.exports = router

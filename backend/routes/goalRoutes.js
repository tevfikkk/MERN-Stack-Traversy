const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controller/goalController')

router.route('/').get(getGoals).post(setGoal)
// Since a couple of line below (get and post) do the same thing as just above
// we can chain them
// because they're in the same path
// // gets a goal
// router.get('/', getGoals)

// // creates a goal
// router.post('/', setGoal)

router.route('/:id').delete(deleteGoal).put(updateGoal)
// // updates a goal
// router.put('/:id', updateGoal)

// // deletes a goal
// router.delete('/:id', deleteGoal)

module.exports = router

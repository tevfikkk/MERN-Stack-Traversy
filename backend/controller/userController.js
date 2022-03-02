const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body // test it on Postman's body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Checks if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(404)
    throw new Error('User already exists!')
  }

  // Hashes password
  const salt = await bcrypt.genSalt(10) // 10 is default
  const hashedPassword = await bcrypt.hash(password, salt)

  // Creates user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user.id, // id
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(404)
    throw new Error('Invalid user data')
  }
})

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Login User' })
})

// @desc Get user data
// @route GET /api/users/me
// @access Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: 'User Data display' })
})

module.exports = {
  registerUser,
  loginUser,
  getMe,
}

const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Gets token from header
      token = req.headers.authorization.split(' ')[1]

      // Verifies token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Gets user from the token
      req.user = await User.findById(decoded.id).select('-password') // -password not include the password

      next()
    } catch (err) {
      console.log(err)
      res.status(401)
      throw new Error('Not authorized!')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token!')
  }
})

module.exports = { protect }

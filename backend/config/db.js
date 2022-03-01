const mongoose = require('mongoose') // mongoose lib

// mongoose provides making a connection between express and database
// MONGO_URI coming from env folder which be hidden for github
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MONGODB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = connectDB

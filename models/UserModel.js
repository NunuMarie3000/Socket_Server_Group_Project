const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  email: {
    required: true,
    type:String,
  },
  profilePic: String,
  username: String
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel
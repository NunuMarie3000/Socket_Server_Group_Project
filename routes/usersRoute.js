const express = require('express')
const router = express.Router()
const userModel = require('../models/UserModel')

// get all users
router.get('/users', async (req, res)=>{
  try {
    const allUsers = await userModel.find()
    res.status(200).send(allUsers)
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

module.exports = router
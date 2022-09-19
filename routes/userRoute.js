const express = require('express')
const router = express.Router()
const userModel = require('../models/UserModel')

// get user by id
router.get('/user/:id', async (req,res)=>{
  const userId = req.params.id
  try {
    const user = await userModel.findById(userId)
    res.send(user)
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

// create new user
router.post('/newuser', async (req,res)=>{
  const userEmail = req.body.email
  try {
    const newUser = await userModel.create({
      email: userEmail
    })
    await newUser.save()
    res.status(201).send(newUser)
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

// update user
// we need to make sure to add email to this when we make put request
router.put('/user/:id', async (req,res)=>{
  const userId = req.params.id
  try {
    await userModel.findById(userId).updateOne(req.body)
    res.status(200)
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

module.exports = router
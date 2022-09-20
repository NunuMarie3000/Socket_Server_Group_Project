const express = require('express')
const router = express.Router()

router.get('/videochat',(req,res) => {
  const random = Math.floor(Math.random() * 10000)
  res.redirect(`/videochat/${random}`)
})

router.get('/videochat/:room',(req,res) => {
  const roomId = req.params.room
  res.send(roomId)
})

module.exports= router
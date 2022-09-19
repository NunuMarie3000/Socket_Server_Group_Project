const express = require('express')
const router = express.Router()
const server = require('http').createServer(router)
const io = require('socket.io')(server)

router.get('/videochat',(req,res) => {
  const random = Math.floor(Math.random() * 10000)
  res.redirect(`/videochat/${random}`)
})

router.get('/videochat/:room',(req,res) => {
  const roomId = req.params.room
  res.send(roomId)
})

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) =>{
    console.log(roomId, userId)
  })
})

module.exports= { router, io }
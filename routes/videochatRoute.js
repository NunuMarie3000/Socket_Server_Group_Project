const express = require('express')
const router = express.Router()
const http = require('http').createServer(router)
const io = require('socket.io')(http, {
  cors: {
    origin: ['http://localhost:3000']
  }
})

io.on('connection', socket =>{
  console.log('Client connected')
  socket.on('disconnect', () => {
    console.log('user disconnect')
  })

  socket.on('join-room', (userId, roomId) => {
    console.log(userId, roomId)
  })
})
io.listen(8080)

router.get('/videochat',(req,res) => {
  const random = Math.floor(Math.random() * 10000)
  res.redirect(`/videochat/${random}`)
})

router.get('/videochat/:room',(req,res) => {
  const roomId = req.params.room
  res.send(roomId)
})

module.exports= { router, io }
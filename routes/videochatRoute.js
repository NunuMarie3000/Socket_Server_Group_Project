const express = require('express')
const router = express.Router()
const http = require('http').createServer(router)
const io = require('socket.io')(http, {
  cors: {
    origin: " * "
  }
})

io.on('connection', (socket) =>{
  console.log('Client connected')

  // socket.on('join-room', (userId, roomId) => {
  //   console.log(userId, roomId)
  // })

  socket.emit('join', socket.id)

  socket.on('disconnect', () => {
    console.log('user disconnect')
    socket.broadcast.emit("call ended")
  })

  socket.on("callUser", ({ userToCall, signalData, from, name})=>{    
    io.to(userToCall).emit("callUser", {signal: signalData, from, name})
  })

  socket.on("answerCall", (data)=>{
    io.to(data.to).emit("callAccepted", data.signal)
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
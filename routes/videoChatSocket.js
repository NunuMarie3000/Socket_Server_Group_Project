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

io.listen(process.env.VIDEOCHAT_PORT)

module.exports = io
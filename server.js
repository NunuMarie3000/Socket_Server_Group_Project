const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
app.use(cors())
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const userRoute = require('./routes/userRoute')
const usersRoute = require('./routes/usersRoute')
const videochatRoute = require('./routes/videochatRoute')
const videoChatSocket = require('./routes/videoChatSocket')

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, ()=>{
  console.log('db connected')
})


app.use(userRoute)
app.use(usersRoute)
app.use(videochatRoute)
app.use(videoChatSocket, cors())

app.listen(process.env.PORT, ()=>{
  console.log('server up and running')
})
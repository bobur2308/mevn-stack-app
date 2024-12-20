require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const connectDb = require('./config/db')
const path = require('path')
const app = express()


app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.get('/',(req,res)=>{
  res.send("Hello world !")
})

// routes
app.use('/api/auth',require('./routes/AuthRoutes'))
app.use('/api/post',require('./routes/PostRoutes'))


connectDb()
const PORT = process.env.PORT || 5050
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))
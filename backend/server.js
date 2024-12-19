require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const connectDb = require('./config/db')
const app = express()


app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
  res.send("Hello world !")
})

// routes
app.use('/api/auth',require('./routes/AuthRoutes'))


connectDb()
const PORT = process.env.PORT || 5050
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))
const express = require('express')
const dbconnction = require('./config/db')
const mainRoute = require('./routes')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express()
dbconnction()

app.use(express.json())
app.use(cookieParser())
app.use("/main",mainRoute)
app.all("*",(req, res) =>{
   res.status(404).json({message:"end point  does not exist"})
})

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port${process.env.PORT}`)
})
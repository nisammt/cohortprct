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

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port${process.env.PORT}`)
})
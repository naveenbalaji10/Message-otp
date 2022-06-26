const express=require('express')
const mongoose=require('mongoose')
const app=express()
const contactRoute=require('./routes/contact')
const messageRoute=require('./routes/message')
const bodyparser=require('body-parser')

const cors=require('cors')
require('dotenv/config')
app.use(bodyparser.json())
app.use(cors())

//Routes

app.use('/contact',contactRoute)
app.use('/sms',messageRoute)

mongoose.connect(process.env.DB,{useNewUrlParser:true},()=>console.log( 'mongodb connected'))

app.listen(3001,()=>console.log('connected to the 3001'))
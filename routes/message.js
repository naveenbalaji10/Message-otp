const express=require('express')

const router=express.Router()
const {Message}=require('../model/message')
require('dotenv/config')
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);





router.get('/',async(req,res)=>{
   try {
    const messages=await Message.find({}).sort({date:-1})
    res.json(messages)
   } catch (error) {
       res.status(500).json({message:error})
   }
})

router.post('/send',async(req,res)=>{
    const {text,otp,name,phoneNumber}=req.body


client.messages
  .create({
     body: text,
     from: '+19302031903',
     to: phoneNumber
   })
  .then(message => console.log(message.sid));
       try {

            message=new Message({
            text,
            otp,
            name,
            phoneNumber
            })
 
            const savedMessage=await message.save();
            res.json(savedMessage)
           
       } catch (error) {
           res.status(500).json({message:error})
       }

})


module.exports=router;
const express=require('express')

const router=express.Router()
const {Contact}=require('../model/contact')

router.get('/',async(req,res)=>{
   try {
    const contacts=await Contact.find({}).sort({date:-1})
    res.json(contacts)
   } catch (error) {
       res.status(500).json({message:error})
   }
})

router.post('/add',async(req,res)=>{
    const {firstName,lastName,phoneNumber}=req.body
       try {
           let contact=await Contact.findOne({phoneNumber:phoneNumber})
           console.log(contact)
           if(contact){
               res.status(400).json({message:"User already exists"});
               return;
           }else{

            contact=new Contact({
                firstName,
                lastName,
                phoneNumber
            })
 
            const savedContact=await contact.save();
            res.json(savedContact)
           }
 
       } catch (error) {
           res.status(500).json({message:error})
       }

})


module.exports=router;
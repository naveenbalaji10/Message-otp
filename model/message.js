const mongoose=require('mongoose')


const Message = mongoose.model('Message', new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
}));


exports.Message = Message;

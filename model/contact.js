const mongoose=require('mongoose')


const Contact = mongoose.model('Contact', new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
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


exports.Contact = Contact;

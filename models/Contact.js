const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
const slug=require('slugs');

const contactSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
            required:'please enter name'
        },
        surname:{
            type:String,
            trim:true,
            required:'please enter surname'
        },
        tel:{
            type:String,
            trim:true,
            required:'please enter tel'
        },
        email:{
            type:String,
            trim:true,
            required:'please enter email'
        },
        created:{
            type:Date,
            default:Date.now
        },
     
    }
);



module.exports = mongoose.model('Contact', contactSchema);
const mongoose = require('mongoose')

const FotosSchema = new mongoose.Schema({
    name: String,  //nome original
    size: Number,
    key: String, // nome com a hash 
    url: String ,
    levantamento:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'levantamento',
    },
    createdAt:{
        type:Date,
        default:Date.now
    },


});

module.exports=mongoose.model('foto', FotosSchema)
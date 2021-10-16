var mongoose = require('mongoose');

var Schema1  = mongoose.Schema;

var login = new Schema1({

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:Number,
        required:true
    }
    
});


module.exports = mongoose.models.user || mongoose.model('user',login);
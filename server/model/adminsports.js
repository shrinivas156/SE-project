var mongoose = require('mongoose');

var Schema1  = mongoose.Schema;

var bookingsschema= new Schema1(
    {
    user_name:String,
    start:Date,
    end:Date
    },
    {
        timestamps:true
    }
);

var view = new Schema1({
    name:{
        type:String,
        required:true
    },
    court:{
        type:Number,
        required:true
    },
    player:{
        type:Number,
        required:true
    },
    bookings:[bookingsschema]

});
view.index(
    {
        name:1,
        court:1
    },{
        unique:true,
    }
);


module.exports = mongoose.models.sport || mongoose.model('sport',view);
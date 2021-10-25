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
    room:{
        type:Number,
        required:true,
        unique:true
    },
    capacity:{
        type:Number,
        required:true
    },
    bookings:[bookingsschema]
});


const guest = mongoose.model('guest',view) ;
const guestbooking= mongoose.model('guestbooking',bookingsschema);

module.exports={guest,guestbooking}
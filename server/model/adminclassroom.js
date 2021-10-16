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
    block:{
        type:Number,
        required:true
    },
    room:{
        type:Number,
        required:true
    },
    capacity:{
        type:Number,
        required:true
    },
    bookings:[bookingsschema]
});
view.index(
    {
        block:1,
        room:1
    },{
        unique:true,
    }
);


module.exports = mongoose.models.classroom || mongoose.model('classrooms',view);
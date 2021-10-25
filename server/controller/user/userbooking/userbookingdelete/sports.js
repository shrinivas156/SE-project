const ptr=require('../../../../model/adminsports');

exports.sports=(req,res)=>{

    const sports_id=req.body.sports;
    const book_id=req.body.book;
    
    ptr.sport.findOne({_id:sports_id}).then((result)=>{
    
        result.bookings=result.bookings.filter(x=>{
            return (x._id!=book_id);
        })
        
        
        result.save();
        ptr.sportbooking.find({_id:book_id}).then((result)=>{
            console.log(result);
        });
        ptr.sportbooking.deleteOne({ _id:book_id}).then(()=>{
            console.log("deleted");
        }).catch((err)=>{
            console.log(err);
        })
        
        res.status(200).send("darshan");
    }).catch((err)=>{
        console.log(err);
    })
}
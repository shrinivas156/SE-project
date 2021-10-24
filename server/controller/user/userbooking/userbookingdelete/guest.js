const ptr=require('../../../../model/adminguest');

exports.guest=(req,res)=>{

    const guest_id=req.body.guest;
    const book_id=req.body.book;
    
    ptr.guest.findOne({_id:guest_id}).then((result)=>{
    
        result.bookings=result.bookings.filter(x=>{
            return (x._id!=book_id);
        })
        
        
        result.save();
        ptr.guestbooking.find({_id:book_id}).then((result)=>{
            console.log(result);
        });
        ptr.guestbooking.deleteOne({ _id:book_id}).then(()=>{
            console.log("deleted");
        }).catch((err)=>{
            console.log(err);
        })
        
        res.status(200).send("darshan");
    }).catch((err)=>{
        console.log(err);
    })
}
const ptr=require('../../../../model/adminseminar');

exports.seminar=(req,res)=>{

    const seminar_id=req.body.seminar;
    const book_id=req.body.book;
    
    ptr.seminar.findOne({_id:seminar_id}).then((result)=>{
    
        result.bookings=result.bookings.filter(x=>{
            return (x._id!=book_id);
        })
        
        
        result.save();
        ptr.seminarbooking.find({_id:book_id}).then((result)=>{
            console.log(result);
        });
        ptr.seminarbooking.deleteOne({ _id:book_id}).then(()=>{
            console.log("deleted");
        }).catch((err)=>{
            console.log(err);
        })
        
        res.status(200).send("darshan");
    }).catch((err)=>{
        console.log(err);
    })
}
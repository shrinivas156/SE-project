const ptr=require('../../../../model/adminsports');

exports.sports=(req,res)=>{

    const sports_id=req.body.sports;
    const book_id=req.body.book;
    const new_start=req.body.start;
    const new_end=req.body.end;
    
    ptr.sport.findOne({_id:sports_id}).then((result)=>{
    
        result.bookings=result.bookings.filter(x=>{
            return (x._id!=book_id);
        })
        
        
        result.save();
        ptr.sportbooking.findOneAndUpdate({_id:book_id},{ start:new_start},{useFindAndModify:false}).then((response)=>{  
             result.bookings.push(response);
             result.save();
            //  console.log(response);
             
        }).catch((err)=>{
            console.log(err);
        })
        
        res.status(200).send("darshan");
    }).catch((err)=>{
        console.log(err);
    })
}
const ptr=require('../../../../model/adminguest')

exports.guest =(req,res)=>{

    const guest_id=req.body.guest;
    const book_id=req.body.book;
    const start=req.body.start;
    const end=req.body.end;
    console.log(guest_id);
    ptr.guest.findOne({_id:guest_id}).then((result)=>{
    
        console.log(result.bookings);
        result.bookings.forEach(element => {
            if(element._id==book_id){
               element.start=start;
               element.end=end;
            }
        });
        result.save();

        ptr.guestbooking.findOne({_id:book_id}).then((response)=>{
            response.start=start;
            response.end=end;
            response.save();
        })
        res.status(200).send("updated");l
    }).catch((err)=>{
        console.log(err);
    })

}
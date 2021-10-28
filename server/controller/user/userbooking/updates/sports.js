const ptr=require('../../../../model/adminsports')

exports.sports =(req,res)=>{

    const sports_id=req.body.sports;
    const book_id=req.body.book;
    const start=req.body.start;
    const end=req.body.end;
    console.log(sports_id);
    ptr.sport.findOne({_id:sports_id}).then((result)=>{
    
        console.log(result.bookings);
        result.bookings.forEach(element => {
            if(element._id==book_id){
               element.start=start;
               element.end=end;
            }
        });
        result.save();

        ptr.sportbooking.findOne({_id:book_id}).then((response)=>{
            response.start=start;
            response.end=end;
            response.save();
        })
        res.status(200).send("updated");l
    }).catch((err)=>{
        console.log(err);
    })

}
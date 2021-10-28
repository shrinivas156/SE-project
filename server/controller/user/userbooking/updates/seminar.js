const ptr=require('../../../../model/adminseminar')

exports.seminar =(req,res)=>{

    const seminar_id=req.body.seminar;
    const book_id=req.body.book;
    const start=req.body.start;
    const end=req.body.end;
    console.log(seminar_id);
    ptr.seminar.findOne({_id:seminar_id}).then((result)=>{
    
        result.booking.forEach(element => {
            if(element._id==book_id){
               element.start=start;
               element.end=end;
            }
        });
        result.save();

        ptr.seminarbooking.findOne({_id:book_id}).then((response)=>{
            response.start=start;
            response.end=end;
            response.save();
        })
        res.status(200).send("updated");
        console.log(result.booking);
    }).catch((err)=>{
        console.log(err);
    })

}
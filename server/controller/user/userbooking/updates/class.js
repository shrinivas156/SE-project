const ptr=require('../../../../model/adminclassroom')

exports.class =(req,res)=>{

    const class_id=req.body.class;
    const book_id=req.body.book;
    const start=req.body.start;
    const end=req.body.end;
    console.log(class_id);
    ptr.classroom.findOne({_id:class_id}).then((result)=>{
    
        console.log(result.bookings);
        result.bookings.forEach(element => {
            if(element._id==book_id){
               element.start=start;
               element.end=end;
            }
        });
        result.save();

        ptr.classbooking.findOne({_id:book_id}).then((response)=>{
            response.start=start;
            response.end=end;
            response.save();
        })
        res.status(200).send("updated");l
    }).catch((err)=>{
        console.log(err);
    })

}
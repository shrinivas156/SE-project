const pointer=require("../../model/adminclassroom")

exports.classbook=  (req,res) => {
    
    const class_id=req.body.classroom;
    const b_start=req.body.start;
    const b_end=req.body.end;
    const userid=req.body.user;
    pointer.classroom.findById(class_id).then(response =>{
           console.log(response.bookings);
           const book=new pointer.classbooking ({
               user_name:userid,
               start:b_start,
               end:b_end
           });
           book.save();
           response.bookings.push(book);
           response.save();
           res.status(202).json(book);

       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }




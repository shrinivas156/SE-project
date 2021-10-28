const pointer = require("../../../model/adminseminar")

exports.seminarbook = (req, res) => {

    const seminar_id = req.body.seminar;
    const b_start = req.body.start;
    const b_end = req.body.end;
    const userid = req.body.user;
    pointer.seminar.findOne({ _id: seminar_id }).then(response => {
        // console.log(response);
        const book = new pointer.seminarbooking({
            user_name: userid,
            start: b_start,
            end: b_end
        });
        book.save();
        // console.log(response.bookings);
        // console.log(1);
        if( response.booking[0]==''){
            response.booking[0]=book ;
            // console.log(2);
        }
        else{
            response.booking.push(book);
            // console.log(3);
        }
        response.save().then(()=>{
            console.log(response);
        }).catch((err)=>{
            // console.log(4);
            console.log(err);
        })
        
        // console.log(5);
        res.status(200).json(book);
    }).catch(err => {
        // console.log(6);
        res.status(500).json({ message: err });
    });

}




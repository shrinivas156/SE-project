const pointer = require("../../../model/adminsports")

exports.sportbook = (req, res) => {

    const sport_id = req.body.sports;
    const b_start = req.body.start;
    const b_end = req.body.end;
    const userid = req.body.user;
    pointer.sport.findOne({ _id: sport_id }).then(response => {
        // console.log(response);
        const book = new pointer.sportbooking({
            user_name: userid,
            start: b_start,
            end: b_end
        });
        book.save();
        console.log(response.bookings);
        if(response.bookings[0]==''){
            response.bookings[0]=book ;
        }
        else{
            response.bookings.push(book);
        }
        response.save().then(()=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })
        
        
        res.status(200).json(book)
    }).catch(err => {
        res.status(500).json({ message: err });
    });

}




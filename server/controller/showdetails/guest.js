const pointer = require('../../model/adminguest');

exports.adminguest = (req,res) => {

    const id = req.params.guestid;
    console.log(id);

    pointer.guesthouse.findOne({_id:id}).then(response =>{
        console.log(response);
        res.status(200).json(response);
   
    }).catch(err => {
        res.status(500).json({message :  err});
    });
}
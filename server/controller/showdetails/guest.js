const pointer = require('../../model/adminguest');

exports.adminguest = (req,res) => {

    const id = req.params.guestid;

    pointer.guest.findOne({_id:id}).then(response =>{
        
        res.status(200).json(response);
   
    }).catch(err => {
        res.status(500).json({message :  err});
    });
}
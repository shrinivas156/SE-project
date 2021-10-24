const pointer = require('../../model/adminseminar');

exports.adminhall = (req,res) => {

    const id = req.params.hallid;

    pointer.seminar.findOne({_id:id}).then(response =>{
        
        res.status(200).json(response);
   
    }).catch(err => {
        res.status(500).json({message :  err});
    });
}
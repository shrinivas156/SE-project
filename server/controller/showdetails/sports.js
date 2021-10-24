const pointer = require('../../model/adminsports');

exports.adminsports = (req,res) => {

    const id = req.params.sportid;

    pointer.sport.findOne({_id:id}).then(response =>{
        
        res.status(200).json(response);
   
    }).catch(err => {
        res.status(500).json({message :  err});
    });
}
const pointer = require('../../model/adminsports');

exports.adminsports = (req,res) => {

    const id = req.params.sportid;
    console.log(id);

    pointer.sports.findOne({_id:id}).then(response =>{
        console.log(response);
        res.status(200).json(response);
   
    }).catch(err => {
        res.status(500).json({message :  err});
    });
}
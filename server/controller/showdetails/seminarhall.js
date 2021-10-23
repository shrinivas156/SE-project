const pointer = require('../../model/adminseminar');

exports.adminhall = (req,res) => {

    const id = req.params.hallid;
    console.log(id);

    pointer.seminarhall.findOne({_id:id}).then(response =>{
        console.log(response);
        res.status(200).json(response);
   
    }).catch(err => {
        res.status(500).json({message :  err});
    });
}
const seminarhall= require('../../model/adminseminar');

exports.adminhall=  (req,res) => {
    var id = req.body.id;
    seminarhall.find({_id:id}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }
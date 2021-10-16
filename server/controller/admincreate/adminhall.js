const seminarhall= require('../../model/adminseminar');

exports.adminhall=  (req,res) => {
    var hall =req.body.hall;
    var capacity = req.body.capacity;
    seminarhall.create({hall:hall,capacity:capacity}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    }); 
 }
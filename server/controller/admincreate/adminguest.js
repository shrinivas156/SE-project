const guest= require('../../model/adminguest');

exports.adminguest=  (req,res) => {
    var room =req.body.room;
    var capacity = req.body.capacity;
    guest.insertOne({block:block,room:room,capacity:capacity}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }
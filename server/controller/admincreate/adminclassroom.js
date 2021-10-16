const classroom= require('../../model/adminclassroom');

exports.adminclass=  (req,res) => {
    var block= req.body.block;
    var room =req.body.room;
    var capacity = req.body.capacity;
    classroom.create({block:block,room:room,capacity:capacity}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }
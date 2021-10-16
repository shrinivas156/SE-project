const guest= require('../../model/adminguest');

exports.adminguest=  (req,res) => {
    var id= req.body.id;
    var capacity = req.body.capacity;
    guest.findOneAndUpdate({_id:id},{capacity:capacity}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }
const seminarhall= require('../../model/adminseminar');

exports.adminhall=  (req,res) => {
    var id= req.body.id;
    var capacity = req.body.capacity;
    seminarhall.findOneAndUpdate({_id:id},{capacity:capacity}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    }); 
 }
const guest= require('../../model/adminguest');

exports.adminguest=  (req,res) => {
    
    guest.find({}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }
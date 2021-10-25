const pointer= require('../../../model/adminsports');

exports.usersports=  (req,res) => {
    
    pointer.sport.find({}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }
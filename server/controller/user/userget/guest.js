const pointer= require('../../../model/adminguest');

exports.userguest =  (req,res) => {
    
    pointer.guest.find({}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }
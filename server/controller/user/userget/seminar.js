const pointer= require('../../../model/adminseminar');

exports.userseminar =  (req,res) => {
    
    pointer.seminar.find({}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }
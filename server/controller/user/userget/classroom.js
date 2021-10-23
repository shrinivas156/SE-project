const pointer= require('../../../model/adminclassroom');

exports.userclass=  (req,res) => {
    
    pointer.classroom.find({}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }
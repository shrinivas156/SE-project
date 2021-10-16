const classroom= require('../../model/adminclassroom');

exports.adminclass=  (req,res) => {
    var id=req.body.id;
    classroom.deleteOne({_id:id}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }
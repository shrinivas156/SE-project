const pointer= require('../../model/adminclassroom');

exports.adminclass=  (req,res) => {
    var id= req.body.id;
    var capacity = req.body.capacity;
    pointer.classroom.findOneAndUpdate({_id:id},{capacity:capacity}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }
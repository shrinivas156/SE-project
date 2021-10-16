const guesthouse= require('../../model/adminguest');

exports.adminguest=  (req,res) => {
    var id = req.body.id;
    guesthouse.deleteOne({_id:id}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }
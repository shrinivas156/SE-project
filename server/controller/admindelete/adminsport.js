const sport= require('../../model/adminsports');

exports.adminsport=  (req,res) => {
    var id= req.body.id;
    sport.find({_id:id}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }
 
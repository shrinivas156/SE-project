const sport= require('../../model/adminsports');

exports.adminsports=  (req,res) => {
    var id= req.body.id;
    var player = req.body.player;
    sport.findOneAndUpdate({_id:id},{player:player}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }